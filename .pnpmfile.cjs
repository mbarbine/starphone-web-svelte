function removeInotify(dependencies) {
  if (dependencies && Object.prototype.hasOwnProperty.call(dependencies, "inotify")) {
    delete dependencies.inotify;
  }
}

module.exports = {
  hooks: {
    readPackage(pkg) {
      removeInotify(pkg.dependencies);
      removeInotify(pkg.optionalDependencies);
      removeInotify(pkg.devDependencies);
      return pkg;
    },
  },
};
