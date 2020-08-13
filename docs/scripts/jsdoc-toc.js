(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"global.html\">Globals</a>","id":"global","children":[]},{"label":"<a href=\"psAcademicHistory.html\">psAcademicHistory</a>","id":"psAcademicHistory","children":[]},{"label":"<a href=\"psDisciplinaryHistory.html\">psDisciplinaryHistory</a>","id":"psDisciplinaryHistory","children":[]},{"label":"<a href=\"psEducationRecords.html\">psEducationRecords</a>","id":"psEducationRecords","children":[]},{"label":"<a href=\"psQuickSearchHS.html\">psQuickSearchHS</a>","id":"psQuickSearchHS","children":[]}],
        openedIcon: ' &#x21e3;',
        saveState: false,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
