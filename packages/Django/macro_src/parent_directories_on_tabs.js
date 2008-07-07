/*
 Travis Cline
 http://traviscline.com/
 
 As posted at:
 http://traviscline.com/blog/2008/04/30/komodo-tab-macro-to-ease-django-development-in-komodo/
 http://dpaste.com/hold/47625/
*/

try {
var vm = ko.views.manager.topView;
var box = document.getAnonymousNodes(vm)[0];

// get the views-tabbed elements
var tabset1 = box.firstChild;
var tabset2 = box.lastChild;

// replace the updateLeafName implementation to use something different

// for the tab label
tabset1.updateLeafName =
tabset2.updateLeafName = function(view) {
    view.parentNode._tab.label = view.title;
    if (view.document) {
        var language = view.document.language;
        if (language == 'Python') {
            var parts = view.document.displayPath.split('/');
            var len = parts.length;
            var label = '';
            if (len > 2) {
                label += parts[len-2] + '/';
            }
            label += parts[len-1];
            
            view.parentNode._tab.setAttribute('crop', 'start');
            view.parentNode._tab.label = label;
            view.parentNode._tab.setAttribute('tooltiptext',view.document.displayPath);
            this.tabbox.firstChild.scrollBoxObject.ensureElementIsVisible(this.tabbox.firstChild.selectedItem);
        }
    }
};

// the "on startup" trigger happens after files
// are opened, so we need to call updateLeafName
// for each opened view.  Files opened after startup
// will be fine
var views = ko.views.manager.topView.getViews(true);
for (var i=0; i < views.length; i++) {
    if (views[i].document) {
        views[i].updateLeafName(views[i]);
    }
}

} catch(e) {
    alert(e);
}