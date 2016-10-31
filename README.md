# XL Deploy live documentation plugin #

Plugin for XL Deploy that gives a live version of the type reference documentation for all installed plugins and extensions. It retrieves all type information directly from the server
so all information will be up to date with any customisations or extensions installed.

There is one small limitation. Virtual types are missing because these are not exposed by the server.

# Requirements #

* **Deployit requirements**
	* **Deployit**: version 4.5.0+

# Installation #

Build the project:
```
gradle clean build
```

Copy the extension to the plugins folder of your XLD installation:
```
cp ./build/libs/xld-live-doc-plugin.jar $XLD_HOME/plugins
```

# Snapshot #

![Screenshot] (/images/screenshot1.png)
