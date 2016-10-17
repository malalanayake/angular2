;
function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("Files: %s", op.file);
    console.log("Max size: %s", op.maxSize);
}
configSomething({
    directory: "/dir1",
    file: "persons.json"
});
//# sourceMappingURL=ConfigOptionSample.js.map