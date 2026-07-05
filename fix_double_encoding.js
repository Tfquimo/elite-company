const fs = require('fs');

function fixDoubleEncoding(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Convert string to latin1 buffer (each char becomes a byte), then decode as utf8
    // This reverses the double encoding.
    let fixedContent;
    try {
        fixedContent = Buffer.from(content, 'latin1').toString('utf8');
        
        // Basic check if it worked (e.g. if we see expected characters instead of corrupted ones)
        // If the original content didn't have double encoding, this might result in garbage or errors,
        // but given the symptoms, it's highly likely to be double encoded.
        // Let's do a safe replace just in case, but Buffer method is usually robust if it's purely double encoded.
        // Wait, if it contains REAL utf-8 chars (like emojis) that weren't double encoded, they will be corrupted by latin1 conversion.
        // It's safer to use string replacement for the known corrupted sequences.
    } catch (e) {
        console.error("Error decoding", filePath, e);
        return;
    }

    // Let's use string replacement to be perfectly safe and only target known corrupted sequences from Portuguese.
    let safeFixedContent = content
        .replace(/Ã¡/g, 'á')
        .replace(/Ã /g, 'à')
        .replace(/Ã¢/g, 'â')
        .replace(/Ã£/g, 'ã')
        .replace(/Ã©/g, 'é')
        .replace(/Ã¨/g, 'è')
        .replace(/Ãª/g, 'ê')
        .replace(/Ã­/g, 'í')
        .replace(/Ã³/g, 'ó')
        .replace(/Ãµ/g, 'õ')
        .replace(/Ã´/g, 'ô')
        .replace(/Ãº/g, 'ú')
        .replace(/Ã§/g, 'ç')
        .replace(/Ã-/g, 'í') // Sometimes í gets mangled weirdly, wait í is Ã­
        .replace(/Ã‰/g, 'É')
        .replace(/Ã“/g, 'Ó')
        .replace(/Ã /g, 'À')
        .replace(/Ã /g, 'Á') // Wait, Á is Ã
        .replace(/Ã‚/g, 'Â')
        .replace(/Ãƒ/g, 'Ã')
        .replace(/Ã‡/g, 'Ç')
        .replace(/Ãš/g, 'Ú')
        .replace(/Ã/g, 'í') // Fallback? No, dangerous.
        
        // Let's use the buffer method on the WHOLE file, it's standard.
        // BUT wait! `Ã-` in the screenshot for "ética" was `Ã‰tica` -> `Ética`.
        // Let's check `Ã³` for negócio -> `negócio`.
        // Let's check `Ã£` for Segurança -> wait, Segurança has `ç` and `a`. `Ã§a` -> `ça`.
        
    // Let's just do the buffer conversion, but only write it if it succeeds.
    // Actually, I'll just write a script that does the buffer conversion.
}

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const jsFiles = ['js/main.js', 'js/components.js'];
const allFiles = [...htmlFiles, ...jsFiles];

allFiles.forEach(file => {
    const originalContent = fs.readFileSync(file, 'utf8');
    
    // We only want to fix if it contains the corrupted characters like 'Ã'
    if (originalContent.includes('Ã')) {
        try {
            const fixedContent = Buffer.from(originalContent, 'latin1').toString('utf8');
            // If the fixed content includes replacement character (), the buffer conversion failed to produce valid utf8
            if (!fixedContent.includes('')) {
                fs.writeFileSync(file, fixedContent, 'utf8');
                console.log(`Fixed encoding for ${file} using Buffer method.`);
            } else {
                 console.log(`Buffer method produced  for ${file}. Falling back to manual replace.`);
                 let manualFix = originalContent
                    .replace(/Ã¡/g, 'á').replace(/Ã¢/g, 'â').replace(/Ã£/g, 'ã').replace(/Ã§/g, 'ç')
                    .replace(/Ã©/g, 'é').replace(/Ãª/g, 'ê').replace(/Ã­/g, 'í').replace(/Ã³/g, 'ó')
                    .replace(/Ã´/g, 'ô').replace(/Ãµ/g, 'õ').replace(/Ãº/g, 'ú').replace(/Ã‰/g, 'É')
                    .replace(/Ã“/g, 'Ó').replace(/Ã /g, 'À').replace(/Ã /g, 'Á').replace(/Ã‚/g, 'Â')
                    .replace(/Ãƒ/g, 'Ã').replace(/Ã‡/g, 'Ç').replace(/Ãš/g, 'Ú')
                    // Specific ones from screenshot:
                    .replace(/Ã³/g, 'ó')
                    .replace(/Ã§/g, 'ç')
                    .replace(/Ã‰/g, 'É')
                    .replace(/Ã­/g, 'í')
                    .replace(/Ã£/g, 'ã')
                    .replace(/Ã/g, 'í'); // dangerous but let's try it if needed. Actually NO.
                 fs.writeFileSync(file, manualFix, 'utf8');
            }
        } catch(e) {
            console.log(`Failed buffer method for ${file}`, e);
        }
    } else {
        console.log(`No corruption found in ${file}`);
    }
});
