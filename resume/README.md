## Resume (LaTeX) — Ubuntu font

Compiled with **XeLaTeX** + **Ubuntu** (`/usr/share/fonts/ubuntu/`).

### One-time install (Arch / CachyOS)

```bash
sudo pacman -S --needed texlive-basic texlive-latexextra texlive-latexrecommended texlive-xetex
```

`texlive-xetex` is required for XeLaTeX (Ubuntu font via `fontspec`).

### Delete old PDFs and rebuild

```bash
cd ~/Documents/GitHub/SamarCurrnetPortfolio && find . -name '*.pdf' -not -path './node_modules/*' -delete && npm run resume:build && echo "Done: public/resume/samar_hayat_resume.pdf"
```

### Docker (no local XeLaTeX)

Mounts your system Ubuntu fonts into the container:

```bash
cd ~/Documents/GitHub/SamarCurrnetPortfolio && find . -name '*.pdf' -not -path './node_modules/*' -delete && npm run resume:docker && echo "Done: public/resume/samar_hayat_resume.pdf"
```

If Docker leaves root-owned aux files:

```bash
sudo rm -f resume/samar_hayat_resume.{aux,log,out}
sudo chown $USER:$USER resume/samar_hayat_resume.pdf public/resume/samar_hayat_resume.pdf
```

### Files

- **Source**: `samar_hayat_resume.tex`
- **Site copy**: `../public/resume/samar_hayat_resume.pdf` (linked from `/resume`)

### Clean build artifacts (optional)

```bash
cd resume && rm -f *.aux *.log *.out
```
