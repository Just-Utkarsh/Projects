const periodicTable = document.getElementById('periodic-table');
const searchBox = document.getElementById('search');
const elementInfo = document.getElementById('element-info');


const elements = [
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, atomicMass: 1.008, protons: 1, neutrons: 0, electrons: 1, description: "A colorless, odorless gas that is the lightest and most abundant element in the universe." },
    { name: "Helium", symbol: "He", atomicNumber: 2, atomicMass: 4.0026, protons: 2, neutrons: 2, electrons: 2, description: "A colorless, odorless, tasteless, non-toxic, inert gas that heads the noble gas group." },
    { name: "Lithium", symbol: "Li", atomicNumber: 3, atomicMass: 6.94, protons: 3, neutrons: 4, electrons: 3, description: "A soft and silvery-white metal, lithium is the lightest metal and the least dense solid element." },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, atomicMass: 9.0122, protons: 4, neutrons: 5, electrons: 4, description: "A hard, gray metal that is used as a hardening agent in alloys." },
    { name: "Boron", symbol: "B", atomicNumber: 5, atomicMass: 10.81, protons: 5, neutrons: 6, electrons: 5, description: "A metalloid element that is essential for plant growth." },
    { name: "Carbon", symbol: "C", atomicNumber: 6, atomicMass: 12.011, protons: 6, neutrons: 6, electrons: 6, description: "A nonmetal that is the basis for all known life on Earth." },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, atomicMass: 14.007, protons: 7, neutrons: 7, electrons: 7, description: "A colorless, odorless gas that makes up 78% of the Earth's atmosphere." },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, atomicMass: 15.999, protons: 8, neutrons: 8, electrons: 8, description: "A colorless, odorless gas essential for respiration." },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, atomicMass: 18.998, protons: 9, neutrons: 10, electrons: 9, description: "A pale yellow gas, fluorine is the most electronegative and reactive element." },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, atomicMass: 20.180, protons: 10, neutrons: 10, electrons: 10, description: "An inert gas used in neon signs." },
    { name: "Sodium", symbol: "Na", atomicNumber: 11, atomicMass: 22.990, protons: 11, neutrons: 12, electrons: 11, description: "A soft, silvery-white, highly reactive metal." },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, atomicMass: 24.305, protons: 12, neutrons: 12, electrons: 12, description: "A shiny gray solid that is a lightweight metal." },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, atomicMass: 26.982, protons: 13, neutrons: 14, electrons: 13, description: "A lightweight, silvery-white metal." },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, atomicMass: 28.085, protons: 14, neutrons: 14, electrons: 14, description: "A metalloid that is a key component in electronics and solar panels." },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, atomicMass: 30.974, protons: 15, neutrons: 16, electrons: 15, description: "A nonmetal essential for life, found in DNA and ATP." },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, atomicMass: 32.07, protons: 16, neutrons: 16, electrons: 16, description: "A yellow, brittle nonmetal that is essential for life." },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, atomicMass: 35.45, protons: 17, neutrons: 18, electrons: 17, description: "A greenish-yellow gas that is used as a disinfectant." },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, atomicMass: 39.948, protons: 18, neutrons: 22, electrons: 18, description: "A colorless, odorless inert gas." },
    { name: "Potassium", symbol: "K", atomicNumber: 19, atomicMass: 39.098, protons: 19, neutrons: 20, electrons: 19, description: "A soft, silvery-white metal that is highly reactive." },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, atomicMass: 40.078, protons: 20, neutrons: 20, electrons: 20, description: "A silvery-white metal essential for life." },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, atomicMass: 44.956, protons: 21, neutrons: 24, electrons: 21, description: "A soft, silvery-white metal used in alloys." },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, atomicMass: 47.867, protons: 22, neutrons: 26, electrons: 22, description: "A strong, lightweight metal resistant to corrosion." },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, atomicMass: 50.941, protons: 23, neutrons: 28, electrons: 23, description: "A hard, silvery-gray metal used in steel alloys." },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, atomicMass: 51.996, protons: 24, neutrons: 28, electrons: 24, description: "A steel-gray metal that is highly resistant to tarnish." },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, atomicMass: 54.938, protons: 25, neutrons: 30, electrons: 25, description: "A gray-white metal used in steel production." },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, atomicMass: 55.845, protons: 26, neutrons: 30, electrons: 26, description: "A metal that is essential for life and is commonly used in construction." },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, atomicMass: 58.933, protons: 27, neutrons: 32, electrons: 27, description: "A hard, lustrous gray metal used in alloys." },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, atomicMass: 58.693, protons: 28, neutrons: 31, electrons: 28, description: "A silvery-white metal that resists corrosion." },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, atomicMass: 63.546, protons: 29, neutrons: 35, electrons: 29, description: "A reddish-brown metal that is an excellent conductor of electricity." },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, atomicMass: 65.38, protons: 30, neutrons: 35, electrons: 30, description: "A bluish-white metal used for galvanizing iron." },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, atomicMass: 69.723, protons: 31, neutrons: 39, electrons: 31, description: "A soft metal that melts just above room temperature." },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, atomicMass: 72.630, protons: 32, neutrons: 41, electrons: 32, description: "A grayish-white metalloid used in semiconductors." },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, atomicMass: 74.922, protons: 33, neutrons: 42, electrons: 33, description: "A metalloid that is highly toxic." },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, atomicMass: 78.971, protons: 34, neutrons: 45, electrons: 34, description: "A nonmetal essential for cellular function." },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, atomicMass: 79.904, protons: 35, neutrons: 45, electrons: 35, description: "A reddish-brown liquid at room temperature." },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, atomicMass: 83.798, protons: 36, neutrons: 48, electrons: 36, description: "A colorless, odorless noble gas." },
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, atomicMass: 85.468, protons: 37, neutrons: 48, electrons: 37, description: "A soft, silvery-white metallic element." },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, atomicMass: 87.62, protons: 38, neutrons: 50, electrons: 38, description: "A silvery metal that is highly reactive." },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, atomicMass: 88.906, protons: 39, neutrons: 50, electrons: 39, description: "A silvery metal used in LEDs." },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, atomicMass: 91.224, protons: 40, neutrons: 51, electrons: 40, description: "A strong metal used in nuclear reactors." },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, atomicMass: 92.906, protons: 41, neutrons: 51, electrons: 41, description: "A ductile metal used in superconductors." },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, atomicMass: 95.95, protons: 42, neutrons: 53, electrons: 42, description: "A metal known for its high melting point." },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, atomicMass: 98, protons: 43, neutrons: 55, electrons: 43, description: "The first artificially produced element, used in medical imaging." },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, atomicMass: 101.07, protons: 44, neutrons: 57, electrons: 44, description: "A rare transition metal used in electronics." },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, atomicMass: 102.905, protons: 45, neutrons: 58, electrons: 45, description: "A silvery-white metal used in catalytic converters." },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, atomicMass: 106.42, protons: 46, neutrons: 60, electrons: 46, description: "A rare metal used in jewelry and electronics." },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, atomicMass: 107.868, protons: 47, neutrons: 61, electrons: 47, description: "A shiny, white metal known for its conductivity." },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, atomicMass: 112.414, protons: 48, neutrons: 64, electrons: 48, description: "A soft, bluish-white metal used in batteries." },
    { name: "Indium", symbol: "In", atomicNumber: 49, atomicMass: 114.818, protons: 49, neutrons: 66, electrons: 49, description: "A soft metal used in electronics." },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, atomicMass: 118.710, protons: 50, neutrons: 69, electrons: 50, description: "A silvery metal that is malleable and ductile." },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, atomicMass: 121.760, protons: 51, neutrons: 70, electrons: 51, description: "A metalloid used in flame retardants." },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, atomicMass: 127.60, protons: 52, neutrons: 75, electrons: 52, description: "A brittle, silvery-white metalloid." },
    { name: "Iodine", symbol: "I", atomicNumber: 53, atomicMass: 126.904, protons: 53, neutrons: 74, electrons: 53, description: "A purple-black solid used in medicine." },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, atomicMass: 131.293, protons: 54, neutrons: 77, electrons: 54, description: "A colorless, dense noble gas." },
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, atomicMass: 132.905, protons: 55, neutrons: 78, electrons: 55, description: "A soft, gold-colored metal." },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, atomicMass: 137.327, protons: 56, neutrons: 81, electrons: 56, description: "A soft, silvery-white metal used in fireworks." },
    { name: "Lanthanum", symbol: "La", atomicNumber: 57, atomicMass: 138.905, protons: 57, neutrons: 82, electrons: 57, description: "A soft, silvery-white metal used in catalysts." },
    { name: "Cerium", symbol: "Ce", atomicNumber: 58, atomicMass: 140.116, protons: 58, neutrons: 82, electrons: 58, description: "A silvery metal used in glass and catalysts." },
    { name: "Praseodymium", symbol: "Pr", atomicNumber: 59, atomicMass: 140.907, protons: 59, neutrons: 82, electrons: 59, description: "A soft, silvery metal used in magnets." },
    { name: "Neodymium", symbol: "Nd", atomicNumber: 60, atomicMass: 144.242, protons: 60, neutrons: 83, electrons: 60, description: "A bright silvery metal used in strong magnets." },
    { name: "Promethium", symbol: "Pm", atomicNumber: 61, atomicMass: 145, protons: 61, neutrons: 84, electrons: 61, description: "A radioactive metal used in luminescent paint." },
    { name: "Samarium", symbol: "Sm", atomicNumber: 62, atomicMass: 150.36, protons: 62, neutrons: 88, electrons: 62, description: "A silvery metal used in magnets." },
    { name: "Europium", symbol: "Eu", atomicNumber: 63, atomicMass: 151.964, protons: 63, neutrons: 89, electrons: 63, description: "A silvery metal used in phosphors." },
    { name: "Gadolinium", symbol: "Gd", atomicNumber: 64, atomicMass: 157.25, protons: 64, neutrons: 93, electrons: 64, description: "A silvery-white metal used in magnetic resonance imaging." },
    { name: "Terbium", symbol: "Tb", atomicNumber: 65, atomicMass: 158.925, protons: 65, neutrons: 93, electrons: 65, description: "A silvery metal used in phosphors." },
    { name: "Dysprosium", symbol: "Dy", atomicNumber: 66, atomicMass: 162.500, protons: 66, neutrons: 96, electrons: 66, description: "A silvery metal used in magnets." },
    { name: "Holmium", symbol: "Ho", atomicNumber: 67, atomicMass: 164.930, protons: 67, neutrons: 97, electrons: 67, description: "A silvery metal used in lasers." },
    { name: "Erbium", symbol: "Er", atomicNumber: 68, atomicMass: 167.259, protons: 68, neutrons: 99, electrons: 68, description: "A silvery metal used in lasers and amplifiers." },
    { name: "Thulium", symbol: "Tm", atomicNumber: 69, atomicMass: 168.934, protons: 69, neutrons: 99, electrons: 69, description: "A silvery metal used in lasers." },
    { name: "Ytterbium", symbol: "Yb", atomicNumber: 70, atomicMass: 173.04, protons: 70, neutrons: 103, electrons: 70, description: "A silvery metal used in electronics." },
    { name: "Lutetium", symbol: "Lu", atomicNumber: 71, atomicMass: 174.966, protons: 71, neutrons: 103, electrons: 71, description: "A silvery-white metal used in catalysts." },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, atomicMass: 178.49, protons: 72, neutrons: 106, electrons: 72, description: "A shiny gray metal used in nuclear reactors." },
    { name: "Tantalum", symbol: "Ta", atomicNumber: 73, atomicMass: 180.948, protons: 73, neutrons: 108, electrons: 73, description: "A hard, blue-gray metal used in electronics." },
    { name: "Tungsten", symbol: "W", atomicNumber: 74, atomicMass: 183.84, protons: 74, neutrons: 110, electrons: 74, description: "A hard metal with the highest melting point." },
    { name: "Rhenium", symbol: "Re", atomicNumber: 75, atomicMass: 186.207, protons: 75, neutrons: 111, electrons: 75, description: "A silvery-white metal used in high-temperature superalloys." },
    { name: "Osmium", symbol: "Os", atomicNumber: 76, atomicMass: 190.23, protons: 76, neutrons: 114, electrons: 76, description: "A hard, blue-gray metal." },
    { name: "Iridium", symbol: "Ir", atomicNumber: 77, atomicMass: 192.217, protons: 77, neutrons: 115, electrons: 77, description: "A dense metal used in high-temperature applications." },
    { name: "Platinum", symbol: "Pt", atomicNumber: 78, atomicMass: 195.084, protons: 78, neutrons: 117, electrons: 78, description: "A precious metal used in jewelry and catalytic converters." },
    { name: "Gold", symbol: "Au", atomicNumber: 79, atomicMass: 196.967, protons: 79, neutrons: 118, electrons: 79, description: "A yellow precious metal used in jewelry and electronics." },
    { name: "Mercury", symbol: "Hg", atomicNumber: 80, atomicMass: 200.592, protons: 80, neutrons: 121, electrons: 80, description: "A silvery liquid metal at room temperature." },
    { name: "Thallium", symbol: "Tl", atomicNumber: 81, atomicMass: 204.38, protons: 81, neutrons: 123, electrons: 81, description: "A soft, malleable metal." },
    { name: "Lead", symbol: "Pb", atomicNumber: 82, atomicMass: 207.2, protons: 82, neutrons: 125, electrons: 82, description: "A heavy metal that is toxic." },
    { name: "Bismuth", symbol: "Bi", atomicNumber: 83, atomicMass: 208.980, protons: 83, neutrons: 125, electrons: 83, description: "A brittle metal used in cosmetics and pharmaceuticals." },
    { name: "Polonium", symbol: "Po", atomicNumber: 84, atomicMass: 209, protons: 84, neutrons: 125, electrons: 84, description: "A highly radioactive element." },
    { name: "Astatine", symbol: "At", atomicNumber: 85, atomicMass: 210, protons: 85, neutrons: 125, electrons: 85, description: "A highly radioactive halogen." },
    { name: "Radon", symbol: "Rn", atomicNumber: 86, atomicMass: 222, protons: 86, neutrons: 136, electrons: 86, description: "A colorless, odorless noble gas." },
    { name: "Francium", symbol: "Fr", atomicNumber: 87, atomicMass: 223, protons: 87, neutrons: 136, electrons: 87, description: "A highly radioactive alkali metal." },
    { name: "Radium", symbol: "Ra", atomicNumber: 88, atomicMass: 226, protons: 88, neutrons: 138, electrons: 88, description: "A highly radioactive metal." },
    { name: "Actinium", symbol: "Ac", atomicNumber: 89, atomicMass: 227, protons: 89, neutrons: 138, electrons: 89, description: "A silvery-white radioactive metal." },
    { name: "Thorium", symbol: "Th", atomicNumber: 90, atomicMass: 232.038, protons: 90, neutrons: 142, electrons: 90, description: "A radioactive metal used in nuclear reactors." },
    { name: "Protactinium", symbol: "Pa", atomicNumber: 91, atomicMass: 231.035, protons: 91, neutrons: 140, electrons: 91, description: "A radioactive metal used in nuclear science." },
    { name: "Uranium", symbol: "U", atomicNumber: 92, atomicMass: 238.028, protons: 92, neutrons: 146, electrons: 92, description: "A silvery-white metal used as fuel in nuclear reactors." },
    { name: "Neptunium", symbol: "Np", atomicNumber: 93, atomicMass: 237, protons: 93, neutrons: 144, electrons: 93, description: "A radioactive metal used in nuclear reactors." },
    { name: "Plutonium", symbol: "Pu", atomicNumber: 94, atomicMass: 244, protons: 94, neutrons: 150, electrons: 94, description: "A radioactive metal used in nuclear weapons." },
    { name: "Americium", symbol: "Am", atomicNumber: 95, atomicMass: 243, protons: 95, neutrons: 148, electrons: 95, description: "A synthetic radioactive element used in smoke detectors." },
    { name: "Curium", symbol: "Cm", atomicNumber: 96, atomicMass: 247, protons: 96, neutrons: 151, electrons: 96, description: "A synthetic radioactive metal used in research." },
    { name: "Berkelium", symbol: "Bk", atomicNumber: 97, atomicMass: 247, protons: 97, neutrons: 150, electrons: 97, description: "A synthetic element used in scientific research." },
    { name: "Californium", symbol: "Cf", atomicNumber: 98, atomicMass: 251, protons: 98, neutrons: 153, electrons: 98, description: "A synthetic radioactive element used in nuclear reactors." },
    { name: "Einsteinium", symbol: "Es", atomicNumber: 99, atomicMass: 252, protons: 99, neutrons: 153, electrons: 99, description: "A synthetic element used in research." },
    { name: "Fermium", symbol: "Fm", atomicNumber: 100, atomicMass: 257, protons: 100, neutrons: 157, electrons: 100, description: "A synthetic element used in research." },
    { name: "Mendelevium", symbol: "Md", atomicNumber: 101, atomicMass: 258, protons: 101, neutrons: 157, electrons: 101, description: "A synthetic element used in research." },
    { name: "Nobelium", symbol: "No", atomicNumber: 102, atomicMass: 259, protons: 102, neutrons: 157, electrons: 102, description: "A synthetic element used in research." },
    { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, atomicMass: 266, protons: 103, neutrons: 163, electrons: 103, description: "A synthetic element used in research." },
    { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, atomicMass: 267, protons: 104, neutrons: 163, electrons: 104, description: "A synthetic element used in research." },
    { name: "Dubnium", symbol: "Db", atomicNumber: 105, atomicMass: 268, protons: 105, neutrons: 163, electrons: 105, description: "A synthetic element used in research." },
    { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, atomicMass: 271, protons: 106, neutrons: 165, electrons: 106, description: "A synthetic element used in research." },
    { name: "Bohrium", symbol: "Bh", atomicNumber: 107, atomicMass: 270, protons: 107, neutrons: 163, electrons: 107, description: "A synthetic element used in research." },
    { name: "Hassium", symbol: "Hs", atomicNumber: 108, atomicMass: 277, protons: 108, neutrons: 169, electrons: 108, description: "A synthetic element used in research." },
    { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, atomicMass: 278, protons: 109, neutrons: 169, electrons: 109, description: "A synthetic element used in research." },
    { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, atomicMass: 281, protons: 110, neutrons: 171, electrons: 110, description: "A synthetic element used in research." },
    { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, atomicMass: 282, protons: 111, neutrons: 171, electrons: 111, description: "A synthetic element used in research." },
    { name: "Copernicium", symbol: "Cn", atomicNumber: 112, atomicMass: 285, protons: 112, neutrons: 173, electrons: 112, description: "A synthetic element used in research." },
    { name: "Nihonium", symbol: "Nh", atomicNumber: 113, atomicMass: 286, protons: 113, neutrons: 173, electrons: 113, description: "A synthetic element used in research." },
    { name: "Flerovium", symbol: "Fl", atomicNumber: 114, atomicMass: 289, protons: 114, neutrons: 175, electrons: 114, description: "A synthetic element used in research." },
    { name: "Moscovium", symbol: "Mc", atomicNumber: 115, atomicMass: 288, protons: 115, neutrons: 173, electrons: 115, description: "A synthetic element used in research." },
    { name: "Livermorium", symbol: "Lv", atomicNumber: 116, atomicMass: 293, protons: 116, neutrons: 177, electrons: 116, description: "A synthetic element used in research." },
    { name: "Tennessine", symbol: "Ts", atomicNumber: 117, atomicMass: 294, protons: 117, neutrons: 177, electrons: 117, description: "A synthetic element used in research." },
    { name: "Oganesson", symbol: "Og", atomicNumber: 118, atomicMass: 294, protons: 118, neutrons: 176, electrons: 118, description: "A synthetic element and the heaviest noble gas." }
];


function createPeriodicTable() {
    periodicTable.innerHTML = '';
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.innerHTML = `<strong>${element.symbol}</strong><br>${element.name}`;
        elementDiv.onclick = () => showElementInfo(element);
        periodicTable.appendChild(elementDiv);
    });
}


function showElementInfo(element) {
    elementInfo.classList.remove('hidden');
    elementInfo.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
        <p><strong>Atomic Mass:</strong> ${element.atomicMass}</p>
        <p><strong>Protons:</strong> ${element.protons}</p>
        <p><strong>Neutrons:</strong> ${element.neutrons}</p>
        <p><strong>Electrons:</strong> ${element.electrons}</p>
        <p><strong>Description:</strong> ${element.description}</p>
    `;
}


searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    const filteredElements = elements.filter(element => element.name.toLowerCase().includes(query) || element.symbol.toLowerCase().includes(query));
    periodicTable.innerHTML = '';
    filteredElements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.innerHTML = `<strong>${element.symbol}</strong><br>${element.name}`;
        elementDiv.onclick = () => showElementInfo(element);
        periodicTable.appendChild(elementDiv);
    });
});


createPeriodicTable();