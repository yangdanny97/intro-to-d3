(() => {
    /* The examples are executable, let's execute them. */
    var source = '';

    d3.selectAll('.ex-exec .example-source').each(() => {
        source += this.innerText;
    });

    eval(source);
})();