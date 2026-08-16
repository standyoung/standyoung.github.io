"""Generate favicon variants from a single source image."""

from pathlib import Path
from typing import Iterable, Tuple

from PIL import Image

WORKSPACE_ROOT = Path(__file__).resolve().parents[1]
SOURCE_PATH = WORKSPACE_ROOT / "images" / "favicon" / "person.png"
OUTPUT_DIR = WORKSPACE_ROOT / "images" / "favicon"

PNG_OUTPUTS: Tuple[Tuple[str, Tuple[int, int]], ...] = (
    ("android-chrome-192x192.png", (192, 192)),
    ("android-chrome-512x512.png", (512, 512)),
    ("apple-touch-icon.png", (180, 180)),
    ("favicon-32x32.png", (32, 32)),
    ("favicon-16x16.png", (16, 16)),
)

ICO_OUTPUT = "favicon.ico"
ICO_SIZES: Tuple[Tuple[int, int], ...] = ((16, 16), (32, 32))


def ensure_output_dir() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def save_png_variants(base_image: Image.Image) -> None:
    for filename, size in PNG_OUTPUTS:
        resized = base_image.resize(size, Image.LANCZOS)
        resized.save(OUTPUT_DIR / filename, format="PNG")


def save_ico_variant(base_image: Image.Image, sizes: Iterable[Tuple[int, int]]) -> None:
    resized_images = [base_image.resize(size, Image.LANCZOS) for size in sizes]
    resized_images[0].save(
        OUTPUT_DIR / ICO_OUTPUT,
        format="ICO",
        sizes=sizes,
    )


def main() -> None:
    ensure_output_dir()
    with Image.open(SOURCE_PATH) as img:
        base = img.convert("RGBA")
        save_png_variants(base)
        save_ico_variant(base, ICO_SIZES)

if __name__ == "__main__":
    main()
