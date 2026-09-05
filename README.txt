DIGITÁLIS NÉVJEGY – TELEPÍTÉSI ÚTMUTATÓ

A csomag fájljai:
- index.html          -> a digitális névjegy oldala
- style.css           -> megjelenés
- contact.vcf         -> letölthető telefonos kontakt
- profile-placeholder.svg -> ideiglenes profilkép

1. ADATOK ÁTÍRÁSA
Nyisd meg az index.html fájlt Jegyzettömbben vagy VS Code-ban, és cseréld ki:
- Magasházi Gábor
- +36 30 123 4567
- info@email.hu
- Veszprém és környéke

Ezután ugyanígy módosítsd a contact.vcf fájlt is.

2. PROFILKÉP CSERÉJE
A saját képedet mentsd a mappába profile.jpg néven.
Az index.html fájlban ezt:
  src="profile-placeholder.svg"
cseréld erre:
  src="profile.jpg"

Javasolt kép: négyzetes JPG, kb. 800x800 px.

3. INGYENES FELTÖLTÉS GITHUB PAGES-RE
- Hozz létre ingyenes GitHub-fiókot: https://github.com
- Kattints: New repository
- Név például: digitalis-nevjegy
- Legyen Public
- Create repository
- Upload files -> töltsd fel a mappa ÖSSZES fájlját
- Commit changes
- Repository -> Settings -> Pages
- Build and deployment / Source: Deploy from a branch
- Branch: main, folder: /(root)
- Save

Néhány perc múlva a GitHub megjeleníti az oldal címét, például:
https://felhasznalonev.github.io/digitalis-nevjegy/

4. QR-KÓD KÉSZÍTÉSE
A GitHub Pages URL-ből készíts STATIKUS QR-kódot. Például bármely ingyenes QR-generátorral,
ahol nincs szükség regisztrációra és "static QR" szerepel.

A statikus QR lényeges: maga a QR közvetlenül a saját GitHub Pages címedet tartalmazza,
így nem egy fizetős QR-szolgáltatótól függ.

5. NÉVJEGYKÁRTYA
A QR-kód PNG/SVG fájlját tedd be Photoshopban a fizikai névjegykártya hátoldalára.
A QR körül hagyj legalább 3-4 mm üres fehér/világos területet.
Nyomtatás előtt próbáld ki több telefon kamerájával.

FONTOS
A QR-kód véglegesítése előtt legyen végleges a GitHub Pages URL. Ha később átnevezed a repository-t
vagy a GitHub felhasználónevedet, az URL változhat, és a már kinyomtatott QR nem fog működni.
