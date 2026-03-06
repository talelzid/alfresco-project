import pdfplumber
import io
import sys

# Rediriger la sortie vers un fichier pour éviter les problèmes d'encodage
output_file = r'd:\Dropbox\Enseignement\Projet portail bdeb\alfresco-project\pdf_content.txt'

pdf_path = r'd:\Dropbox\Enseignement\Cours\Automation II\Support\CH04_Webdriver_Java_1.pdf'

with open(output_file, 'w', encoding='utf-8') as out:
    with pdfplumber.open(pdf_path) as pdf:
        out.write(f'Nombre de pages: {len(pdf.pages)}\n\n')
        # Extraire le texte de toutes les pages
        for i in range(len(pdf.pages)):
            page = pdf.pages[i]
            text = page.extract_text()
            if text and text.strip():
                out.write(f'\n{"="*80}\n')
                out.write(f'--- PAGE {i+1} ---\n')
                out.write(f'{"="*80}\n')
                out.write(text)
                out.write('\n')

print(f"Contenu extrait dans {output_file}")

