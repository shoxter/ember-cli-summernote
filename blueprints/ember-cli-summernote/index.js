module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;

    return that.addPackageToProject('summernote', "0.8.3");
  }
};
