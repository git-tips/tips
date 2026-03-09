const fs = require('fs');
const tips = require('./tips.json');

const header = `## git-tips
> Collection of \`git-tips\`, want to add your tips? Checkout [contributing.md](./contributing.md)

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips) | [한국어](https://github.com/mingrammer/git-tips) | [Tiếng Việt](https://github.com/hprobotic/git-tips) | [日本語](https://github.com/isotai/git-tips) | [नेपाली](https://github.com/amarduwal/git-tips) | [Polski](https://github.com/mbiesiad/tips) | [فارسی](https://github.com/javadnikbakht/git-tips)

### __Tools:__

* [git-tip](https://www.npmjs.com/package/git-tip) - A handy CLI to make optimum use of these tips. ([Here in Docker container](https://github.com/djoudi5/docker-git-tip))

📖 **[Read the interactive GitBook documentation here!](https://git-tips.github.io/tips/)**

P.S: All these commands are tested on \`git version 2.7.4 (Apple Git-66)\`.

`;

let toc = "## Table of Contents\n\n";
let content = "";

const categories = {};
tips.forEach(tip => {
    const cat = tip.category || 'Miscellaneous';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(tip);
});

// Generate TOC and Content
Object.keys(categories).sort().forEach(cat => {
    toc += `* [${cat}](#${cat.toLowerCase().replace(/ /g, '-')})\n`;
    content += `\n## ${cat}\n`;
    categories[cat].forEach(tip => {
        let slug = tip.title.toLowerCase().replace(/[^\w\- ]+/g, '').replace(/\s+/g, '-');
        toc += `  * [${tip.title}](#${slug})\n`;
        
        content += `\n### ${tip.title}\n`;
        content += `\`\`\`sh\n${tip.tip}\n\`\`\`\n`;
        if (tip.alternatives) {
            content += `**Alternatives:**\n`;
            let alts = Array.isArray(tip.alternatives) ? tip.alternatives : [tip.alternatives];
            alts.forEach(alt => {
                content += `\`\`\`sh\n${alt}\n\`\`\`\n`;
            });
        }
    });
});

fs.writeFileSync('README.md', header + toc + content);
console.log("README.md generated successfully!");
