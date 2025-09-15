import os
from typing import Dict
from playwright.sync_api import sync_playwright

URLS: Dict[str, str] = {
    "Get Started": "https://docs.devin.ai/getting-started",
    "Introducing Devin": "https://docs.devin.ai/introducing-devin",
    "Your First Session": "https://docs.devin.ai/getting-started",
    "Tutorial Library": "https://docs.devin.ai/tutorial-library",
    "Essential Guidelines": "https://docs.devin.ai/instructing-devin-effectively",
    "When to Use Devin": "https://docs.devin.ai/when-to-use-devin",
    "Instructing Devin Effectively": "https://docs.devin.ai/instructing-devin-effectively",
    "Good vs. Bad Instructions": "https://docs.devin.ai/instructing-devin-effectively",
}


def take_screenshots(urls: Dict[str, str], directory: str = "public/screenshots/devin", timeout_ms: int = 120000, retries: int = 3) -> None:
    """
    Navigates to a list of URLs and takes a full-page screenshot of each page.

    Args:
        urls: Mapping of descriptive names to URLs.
        directory: Directory to save screenshots in (created if missing).
        timeout_ms: Navigation timeout per URL in milliseconds.
        retries: Number of navigation retries per URL on timeout.
    """
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
                    page.goto(url, timeout=timeout_ms, wait_until="networkidle")

                    # Best-effort cookie banner dismissal (common patterns)
                    for selector in [
                        'button:has-text("Accept")',
                        'button:has-text("I agree")',
                        'button:has-text("Got it")',
                        'text=Accept all',
                    ]:
                        try:
                            if page.locator(selector).first.is_visible():
                                page.locator(selector).first.click()
                                break
                        except Exception:
                            pass

                    # Ensure fonts/layout stabilized
                    page.wait_for_timeout(1000)

                    safe_name = (
                        name.replace(" ", "_")
                        .replace("/", "-")
                        .replace("|", "-")
                        .replace(":", "-")
                    )
                    out_path = os.path.join(directory, f"{safe_name}.png")
                    page.screenshot(path=out_path, full_page=True)
                    print(f"Screenshot saved to {out_path}")
                    break
                except Exception as e:
                    attempt += 1
                    if attempt > retries:
                        print(f"Could not take screenshot of {url} after {retries+1} attempts. Error: {e}")
                    else:
                        page.wait_for_timeout(2000)
                        continue

        context.close()
        browser.close()


if __name__ == "__main__":
    take_screenshots(URLS)
