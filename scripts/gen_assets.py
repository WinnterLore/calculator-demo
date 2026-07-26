from PIL import Image, ImageDraw
import math
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "src", "assets")
os.makedirs(OUT, exist_ok=True)


def save(img, name):
    img.save(os.path.join(OUT, name))
    print("wrote", name)


def avatar(seed_gray, name):
    size = 160
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, size, size], fill=(seed_gray, seed_gray, seed_gray, 255))
    # simple head+shoulders silhouette in a lighter/darker tone
    fg = min(255, seed_gray + 60)
    d.ellipse([size * 0.32, size * 0.2, size * 0.68, size * 0.56], fill=(fg, fg, fg, 255))
    d.pieslice(
        [size * 0.1, size * 0.55, size * 0.9, size * 1.35],
        180,
        360,
        fill=(fg, fg, fg, 255),
    )
    mask = Image.new("L", (size, size), 0)
    md = ImageDraw.Draw(mask)
    md.ellipse([0, 0, size, size], fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    save(out, name)


avatar(70, "avatar-1.png")
avatar(95, "avatar-2.png")
avatar(50, "avatar-3.png")


def icon_canvas():
    size = 200
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    return img, ImageDraw.Draw(img), size


# ChatGPT-esque interlocking rounded shapes (abstract, monochrome)
img, d, size = icon_canvas()
c = size / 2
r_outer = size * 0.34
r_hole = size * 0.13
n = 6
petal_r = size * 0.13
for i in range(n):
    angle = math.pi * 2 * i / n - math.pi / 2
    cx = c + r_outer * 0.62 * math.cos(angle)
    cy = c + r_outer * 0.62 * math.sin(angle)
    d.ellipse(
        [cx - petal_r, cy - petal_r, cx + petal_r, cy + petal_r],
        outline=(235, 235, 235, 255),
        width=int(size * 0.045),
    )
d.ellipse(
    [c - r_hole, c - r_hole, c + r_hole, c + r_hole],
    fill=(235, 235, 235, 255),
)
save(img, "icon-chatgpt.png")

# Perplexity-esque diamond/compass mark
img, d, size = icon_canvas()
c = size / 2
s = size * 0.3
pts = [(c, c - s), (c + s, c), (c, c + s), (c - s, c)]
d.polygon(pts, outline=(230, 230, 230, 255), width=int(size * 0.035))
d.line([(c, c - s), (c, c + s)], fill=(230, 230, 230, 255), width=int(size * 0.025))
d.line([(c - s, c), (c + s, c)], fill=(230, 230, 230, 255), width=int(size * 0.025))
d.ellipse(
    [c - size * 0.05, c - size * 0.05, c + size * 0.05, c + size * 0.05],
    fill=(255, 255, 255, 255),
)
save(img, "icon-perplexity.png")

# Google-esque abstract "G" arc mark
img, d, size = icon_canvas()
c = size / 2
r = size * 0.32
width = int(size * 0.09)
d.arc([c - r, c - r, c + r, c + r], start=20, end=300, fill=(225, 225, 225, 255), width=width)
d.line(
    [(c, c), (c + r + width / 2, c)],
    fill=(225, 225, 225, 255),
    width=width,
)
save(img, "icon-google.png")
