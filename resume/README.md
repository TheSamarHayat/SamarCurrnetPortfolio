## Resume (LaTeX)

### Files

- **Source**: `samar_hayat_resume.tex`
- **Output PDF**: `samar_hayat_resume.pdf`

### Build / rebuild PDF

Install LaTeX tooling (Ubuntu/Debian):

```bash
sudo apt install texlive-latex-base texlive-latex-extra texlive-fonts-recommended
```

Compile:

```bash
cd resume
pdflatex samar_hayat_resume.tex
```

### Clean build artifacts (optional)

```bash
cd resume
rm -f *.aux *.log *.out
```

