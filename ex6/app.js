function Camera(brand, model, year, format, lense, filmType) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.format = format;
  this.lense = lense;
  this.filmType = filmType;

  const getCurrentYear = () => new Date().getFullYear; // Need to ask
  const cameraAge = (year) => getCurrentYear() - year; // Need to ask
}

const myCamera = new Camera(
  "Hasselblad",
  "500C/M",
  1963,
  "medium format",
  "Carl Zeiss 80mm f/2.8 Planar T",
  120
);
