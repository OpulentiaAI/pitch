import os
from typing import Dict
from playwright.sync_api import sync_playwright


def capture(urls: Dict[str, str], directory: str, timeout_ms: int = 60000, retries: int = 2) -> None:
    os.makedirs(directory, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1920, "height": 1080})
        page = context.new_page()
        for name, url in urls.items():
            attempt = 0
            while attempt <= retries:
                try:
                    print(f"Navigating to: {name} ({url}) [attempt {attempt+1}/{retries+1}]")
                    page.goto(url, wait_until="networkidle", timeout=timeout_ms)
                    page.wait_for_timeout(1000)
                    safe = name.replace(" ", "_").replace("/", "-").replace(":", "-")
                    out_path = os.path.join(directory, f"{safe}.png")
                    page.screenshot(path=out_path, full_page=True)
                    print(f"Saved: {out_path}")
                    break
                except Exception as e:
                    attempt += 1
                    if attempt > retries:
                        print(f"Failed: {url} ({e})")
                    else:
                        page.wait_for_timeout(2000)
                        continue
        context.close()
        browser.close()


if __name__ == "__main__":
    capture({"jina-ai-events": "https://github.com/jina-ai/Events"}, "public/screenshots/events", timeout_ms=120000, retries=3)
