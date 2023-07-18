function html(body, title = 'Demo') {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <title>${title}</title>
</head>
<body>  
    <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/create">Create</a></li>
        </ul>
    </nav>
${body}
</body>
</html>`;
}

const data = [
    {
        id: 'asd01',
        name: 'P1',
        color: 'Red',
    },
    {
        id: 'asd02',
        name: 'P2',
        color: 'Yellow',
    },
];

module.exports = {
    html,
    data,
};
