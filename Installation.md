In the repository you'll find the contents of a Komodo project containing a collection of Komodo resources for adding Django-enhanced capabilities to the editor.

You can open this project (komodo.kpf) in Komodo.

You should see the following folders:
  * **commands** (project folder: commands for building and managing django code)
  * **extensions** (custom and 3rd party .xpi extensions)
  * **macro\_src** (raw source for macros, will prob go away)
  * **macros** (project folder: enable django specific shortcuts/automation)
  * **menus** (project folder: UI menus to access commands)
  * **packages** (the komodo.kpf file exported as a Komodo package (Django.kpz))
  * **templates** (django templates of various django file types; ex: model, form, field, middleware, urls, etc.

You should also now be able to see a _"Django"_ menu option on the main menu containing a subset of the DjangoManageCommands. Since the project contains a Komodo Menu Resource the menu gets added when the project is loaded.

If you right click on the project and select "Create Template from Project", save the template to something like:

> ~/.komodoedit/4.3/project-templates/My Templates/Django.kpz

Now you create new projects via File -> New -> New Project from Template.  Select the project template you just created.  The newly created Komodo project will contain the Django hooks such as the menu and the macros. It will also automatically create a new Django project for you due to the "oncreate" macro.  Macros named "oncreate" are automatically run when the project is created.

You can also export it as a package that can then be imported into your Toolbox.  This should have the effect of making the DKK resources available on more of a global level. On my Komodo Edit instance, the resources aren't being loaded until I restart Komodo at this time.

If you open multiple template-based projects or have a template-based project open and the toolbox loaded you'll notice you can get multiple Django menus.



