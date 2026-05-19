#!/usr/bin/env python3
"""Generate workedWithGridItems.ts from Figma node 1982:6045 metadata."""

INSTANCES = {
    "1985:6649": ("39359", False),
    "1985:6625": ("39360", False),
    "1985:6700": ("39361", True),
    "1985:6655": ("39362", False),
    "1985:6703": ("39363", False),
    "1985:6652": ("39364", False),
    "1985:6622": ("39360", False),
    "1985:6679": ("39365", False),
    "1985:6685": ("39366", False),
    "1985:6640": ("39367", False),
    "1985:6715": ("39368", False),
    "1985:6634": ("39365", False),
    "1985:6709": ("39369", False),
    "1985:6694": ("39370", False),
    "1985:6661": ("39371", False),
    "1985:6631": ("39364", False),
    "1985:6730": ("39370", False),
    "1985:6610": ("39362", False),
    "1985:6724": ("39372", False),
    "1985:6616": ("39363", False),
    "1985:6721": ("39369", False),
    "1985:6670": ("39373", False),
    "1985:6667": ("39372", False),
    "1985:6691": ("39374", False),
    "1985:6646": ("39375", False),
    "1985:6628": ("39371", False),
    "1985:6697": ("39376", False),
    "1985:6607": ("39377", False),
    "1985:6676": ("39378", False),
    "1985:6682": ("39359", False),
    "1985:6643": ("39360", False),
    "1985:6712": ("39365", False),
    "1985:6637": ("39366", False),
    "1985:6706": ("39367", False),
    "1985:6733": ("39368", False),
    "1985:6658": ("39364", False),
    "1985:6613": ("39370", False),
    "1985:6727": ("39362", False),
    "1985:6619": ("39371", False),
    "1985:6718": ("39363", False),
    "1985:6673": ("39369", False),
    "1985:6664": ("39373", False),
    "1985:6688": ("39372", False),
}

# Child order from Figma metadata (1982:6045)
CHILDREN = """
1982:6046 1982:6047 1982:6048 1982:6049 1982:6050 1982:6051 1982:6052 1982:6053
1985:6649 1985:6625 1985:6700 1985:6655 1985:6703 1985:6652 1985:6622
1982:6061 1982:6062 1982:6063 1982:6064 1982:6065 1982:6066 1982:6067 1982:6068 1982:6069 1982:6070 1982:6071 1982:6072 1982:6073 1982:6074 1982:6075
1985:6679 1985:6685 1985:6640 1985:6715 1985:6634 1985:6709 1985:6694 1985:6661 1985:6631
1982:6085 1982:6086 1982:6087 1982:6088 1982:6089 1982:6090 1982:6091 1982:6092 1982:6093 1982:6094 1982:6095 1982:6096 1982:6097
1985:6730 1985:6610 1985:6724 1985:6616 1985:6721 1985:6670 1985:6667 1985:6691 1985:6646 1985:6628 1985:6697
1982:6109 1982:6110 1982:6111 1982:6112 1982:6113 1982:6114 1982:6115 1982:6116 1982:6117 1982:6118 1982:6119 1982:6120 1982:6121
1985:6607 1985:6676 1985:6682 1985:6643 1985:6712 1985:6637 1985:6706 1985:6733 1985:6658
1982:6131 1982:6132 1982:6133 1982:6134 1982:6135 1982:6136 1982:6137 1982:6138 1982:6139 1982:6140 1982:6141 1982:6142 1982:6143 1982:6144 1982:6145
1985:6613 1985:6727 1985:6619 1985:6718 1985:6673 1985:6664 1985:6688
1982:6153 1982:6154 1982:6155 1982:6156 1982:6157 1982:6158 1982:6159 1982:6160
""".split()

# 72 placeholder surface variants (Figma node 1982:6045)
PH_VARIANTS = """
s1 s3 s1 s2 s2 s1 s2 s1
s1 s3 s1 s3 s1 s1 s2 s3 s2 s1 s1 s3 s2 s1 s1
s2 s1 s1 s3 s2 s1 s1 s1 s3 s2 s1 s2 s2
s2 s3 s1 s3 s1 s2 s3 s1 s1 s1 s3 s1 s3
s3 s2 s1 s1 s3 s3 s1 s1 s2 s3 s3 s1 s2 s1 s2
s3 s2 s1 s3 s2 s3 s1 s3
""".split()

# Map figma asset hashes - from existing MainV2 imports (grep needed)
HASH_BY_NUM = {
    "39359": "89dc44418c4ea8f9657791af6a1075ffd66791ae",
    "39360": "52c3cc7f5da1e8362aea713ef34daac263a139c0",
    "39361": "c3ef8c31e72eb4652c9ca201c01de310aec3e084",
    "39362": "5a55db7d30becbfd694a2a90c3300e8a38665730",
    "39363": "fe31475cc3190276af7dc829c0d05637c4081702",
    "39364": "01d741a7342c223a089fedd9aa4fd42c6402cd26",
    "39365": "30f88d3358b1007f01dd38105c625f91f76efe52",
    "39366": "5e680933a052367d2b4cb0c3f5ea1cb9a9b17bbe",
    "39367": "907b0e579d05f0ae827b0af6413ad3a479029d2c",
    "39368": "a4847eca6f52842c45f518693985919a36d8f5d6",
    "39369": "ed02599304c6e7ad0a729492817e1bf8d6e3b8bb",
    "39370": "95c9a66598e30f3a767d67b3f2bf9637529a6e15",
    "39371": "9a097003b1d0f959da41f87b6031751f71800388",
    "39372": "ff2cd59d1183985933f91a818696525cb7bfb563",
    "39373": "3f69aea170283cc42b73525de37b0e0ab25efc47",
    "39374": "d563da34a22c98fc54872c688cddb7612f05c795",
    "39375": "c2efda444cd7a2255eb5d528a9d46c8071a5891f",
    "39376": "6f00a123e0f50014ff14a3fa32c68a48c1a89912",
    "39377": "237d9b7a928bb1bbad74c39c503b67c525fb3fa0",
    "39378": "adeb2e9b9fa1a7e03359ea170d78b0995bf4110a",
}

items = []
ph_i = 0
for cid in CHILDREN:
    if cid.startswith("1985:"):
        num, featured = INSTANCES[cid]
        items.append(f'  {{ type: "photo", id: "{cid}", num: "{num}", featured: {str(featured).lower()} }},')
    else:
        v = PH_VARIANTS[ph_i % len(PH_VARIANTS)]
        ph_i += 1
        items.append(f'  {{ type: "placeholder", variant: "{v}" }},')

out_path = __file__.replace("scripts/generate-worked-with-grid.py", "src/components/workedWithGridItems.ts")

photo_imports = []
photo_entries = []
for num in sorted(HASH_BY_NUM.keys(), key=int):
    h = HASH_BY_NUM[num]
    var = f"img{num}"
    photo_imports.append(f'import {var} from "figma:asset/{h}.png";')
    photo_entries.append(f'  "{num}": {var},')

content = f"""// Auto-generated from Figma node 1982:6045 — run scripts/generate-worked-with-grid.py to refresh

{chr(10).join(photo_imports)}

export const PHOTO_SRC = {{
{chr(10).join(photo_entries)}
}} as const;

export type WorkedWithGridItem =
  | {{ type: "placeholder"; variant: "s1" | "s2" | "s3" }}
  | {{ type: "photo"; id: string; num: keyof typeof PHOTO_SRC; featured?: boolean }};

export const WORKED_WITH_GRID_ITEMS = [
{chr(10).join(items)}
] as const satisfies readonly WorkedWithGridItem[];
"""

from pathlib import Path
Path(out_path).write_text(content)
print(f"Wrote {out_path} ({len(CHILDREN)} items, {ph_i} placeholders)")
