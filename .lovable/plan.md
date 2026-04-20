
Brukeren vil ha et bilde av "ConsultEng"-logoen (samme stil som i headeren) som PNG med transparent bakgrunn for bruk som e-postsignatur.

Headeren bruker:
- "Consult" i `text-foreground` (#1F2430 / hsl(220 18% 16%))
- "Eng" i `text-accent` (#4F725F / hsl(142 18% 38%))
- Font: Fraunces (font-display), medium weight (500), tracking-tight

## Plan

Generer en PNG med transparent bakgrunn som matcher headeren nøyaktig:

1. Last ned Fraunces-fonten via Google Fonts.
2. Bruk Python (PIL) til å rendere teksten "ConsultEng" hvor:
   - "Consult" tegnes i #1F2430
   - "Eng" tegnes i #4F725F
   - Font: Fraunces Medium (500), tett spacing
   - Stor oppløsning (f.eks. 1200px bred) for skarphet i e-postklienter
   - Helt transparent bakgrunn
3. Lagre som `/mnt/documents/consulteng-signature.png`.
4. QA: vis bildet for å bekrefte transparens, farger, og at ingenting er klippet.
5. Lever via `<lov-artifact>`.
