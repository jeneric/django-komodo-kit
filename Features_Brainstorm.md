For brevity feel free to use "DKK" (Django Komodo Kit) to indicate this project whenever writing below.



# Developer Resources #
  * [Komodo Extensions & Macros Forum](http://community.activestate.com/forums/komodo-extensions)
  * [Komodo Community Forums](http://community.activestate.com/forums/komodo)

# Implementation Strategies #

The goal is to utilize the built-in user extension tools as much as possible to form the core functionality. The Komodo platform is flexible with regards to how you can use and reference collections of files/snippets/commands/... Whenever something isn't obvious to accomplish you can just create a command that runs a python script. This isn't meant to discourage anyone from exploring some of the more "exotic" strategies of writing extensions, writing XPCOM, or Python (+Django) + XUL. We'll need to weigh the pros and cons of those once we're ready to tackle some cool usability features.

KomodoExtensionStrategies

# Misc. Feature Ideas #

## Near ##

  * A toolbar for creating Django components: Model, Manager, Field, Form, etc.
  * Add Template Library for current project
  * Add template tag
  * New Project, New App. Ability to customize the outputs.  For example: settings customizations, include other common files like fields.py, forms.py, etc. by default.

  * Form editors for settings.py and urls.py
  * Wizard for creating a new project, app, and setting up models, etc.
    * This can probably be accomplished in a wizard-like way by using a combination of custom commands and a macro. Having a forms-based process would be a nice touch.
    * see [Creating Project Templates from Macros](http://community.activestate.com/faq/creating-project-template#attachments)

  * Expose the manage.py commands via menus/toolbars
    * One click dump of all the sql commands

  * Auto-complete, context sensitive documentation for templates and template tags

  * Manage virtual Python environments (virtualenv) via menu and toolbar

  * Integrate [django-command-extensions](http://code.google.com/p/django-command-extensions/)

## Far ##

  * The DTL parser does not understand inheritance (via {% extends base.html %}). Therefore, it complains that the (X)HTML header is missing and, consequently, the document is not valid and well-formed. The header would be in base.html, though, for example. See [Bug #77251](http://bugs.activestate.com/show_bug.cgi?id=77251)

  * Django-Evolution support

  * Application Deployment Management

  * (IDE ONLY) Integrate debugger with development server

> Debugging is described [here](http://community.activestate.com/forum-topic/debugging-django-apps) and it works as a toolbox command using the second option mentioned there (port number may vary, see under Debug/Listener Status and change in Preferences/Debug/Connection):

> `/path-to-komodo-install/lib/support/dbgp/bin/pydbgp -d localhost:9000 manage.py runserver --noreload`