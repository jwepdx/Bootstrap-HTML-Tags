# Tag Usage
## Tag List
- [``` <bs-container> ```](./USAGE.md#<bs-container>)
- [``` <bs-row> ```]()
- [``` <bs-col> ```]()
- [``` <bs-navbar> ```]()
- [``` <bs-card> ```]()
- [``` <bs-card-group> ```]()
- [``` <bs-card-deck> ```]()
- [``` <bs-card-columns> ```]()
- [``` <bs-jumbotron> ```]()
- [``` <bs-list-group> ```]()
- [``` <bs-dropdown> ```]()
- [``` <bs-breadcrumb> ```]()
- [``` <bs-badge> ```]()
- [``` <bs-carousel> ```]()
- [``` <bs-button-group> ```]()
- [``` <bs-button-bar> ```]()
- [``` <bs-modal> ```]()
- [``` <bs-pagination> ```]()
- [``` <bs-popover> ```]()
- [``` <bs-progress> ```]()
- [``` <bs-progress-bar> ```]()
## Usage
### Basic Layout:
``` html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Page Title</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
  <bs-container type="fluid">
    <bs-navbar>
    </bs-navbar>
    <bs-row>
      <bs-col xs="" sm="" md="" lg="" xl="">
      </bs-col>
    </bs-row>
    <bs-row>
      <bs-col xs="" sm="" md="" lg="" xl="">
      </bs-col>
    </bs-row>
  </bs-container>
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <script src="tags.js"></script>
  <script src="node_modules/popper.js/dist/popper.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>
```
### <a name="<bs-container>"></a>``` <bs-container> ```
###### Standard Container:
``` html
<bs-container>
  <!-- Content Goes Here -->
</bs-container>
```
The standard container occupies most of the space, but leaves room on the sides.
###### Fluid Container:
``` html
<bs-container type="fluid">
  <!-- Content Goes Here -->
</bs-container>
```
A fluid container is a full width container, meaning that it occupies the entire horizontal space.
## ``` <bs-row> ```
``` html
<bs-row>
  <!-- Row Content Here -->
</bs-row>
```
Creates a row for the flexbox grid
