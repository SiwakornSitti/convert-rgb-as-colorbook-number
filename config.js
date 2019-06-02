// ===================================================================================================== //
const imagePath = "./example.png";
const outputFilename = "./result.txt";

const colorPalette = {
  'ffffffff': '01', 
  'f1d699ff': '02', 
  'f1d27fff': '03', 
  'fbfa4fff': '04', 
  'e69636ff': '05', 
  'dc5738ff': '06', 
  'db282cff': '07', 
  '92292eff': '08', 
  'f1d3b4ff': '09', 
  'e8adb7ff': '10', 
  'de6b72ff': '11', 
  'b67cb6ff': '12', 
  'ad5797ff': '13', 
  '532873ff': '14', 
  'c8f8e1ff': '15', 
  'defb8fff': '16', 
  '79c250ff': '17', 
  '395b29ff': '18', 
  '497674ff': '19', 
  'b2edeeff': '20', 
  '8fcee8ff': '21', 
  '3f6fd3ff': '22', 
  '243c7aff': '23', 
  '973227ff': '24', 
  '804316ff': '25', 
  '97999eff': '26', 
  '80654bff': '27', 
  'e4ebb9ff': '28', 
  '4e4543ff': '29', 
  'ff': '30', 
}

const stand = {
  width: 40,
  height: 25
};

const plateSize = {
  width: 5,
  height: 4
};
// ===================================================================================================== //

module.exports = {
  imagePath,
  outputFilename,
  stand,
  plateSize,
  colorPalette
};
