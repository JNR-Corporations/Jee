export const subjects=[
 {id:'physics',name:'Physics',icon:'⚡',progress:72,color:'purple',chapters:[
  {id:'units-measurements',name:'Units & Measurements',class:11,difficulty:'Easy',progress:91,topics:['Units','Dimensions','Errors']},
  {id:'motion-straight',name:'Motion in a Straight Line',class:11,difficulty:'Medium',progress:78,topics:['Kinematics','Graphs','Relative motion']},
  {id:'laws-motion',name:'Laws of Motion',class:11,difficulty:'Medium',progress:64,topics:['Newton Laws','Friction','Circular motion']},
  {id:'work-energy',name:'Work, Energy & Power',class:11,difficulty:'Medium',progress:58,topics:['Work','Potential energy','Power']},
  {id:'rotational-motion',name:'Rotational Motion',class:11,difficulty:'Hard',progress:42,topics:['Torque','Angular momentum','Rolling']}
 ]},
 {id:'chemistry',name:'Chemistry',icon:'🧪',progress:68,chapters:[
  {id:'basic-concepts',name:'Some Basic Concepts of Chemistry',class:11,difficulty:'Easy',progress:82,topics:['Mole concept','Stoichiometry']},
  {id:'atomic-structure',name:'Atomic Structure',class:11,difficulty:'Medium',progress:70,topics:['Bohr model','Quantum numbers','Spectra']},
  {id:'periodic-classification',name:'Periodic Classification',class:11,difficulty:'Easy',progress:75,topics:['Periodic trends','Electronic configuration']},
  {id:'chemical-bonding',name:'Chemical Bonding',class:11,difficulty:'Hard',progress:51,topics:['VSEPR','Hybridisation','MOT']},
  {id:'thermodynamics',name:'Thermodynamics',class:11,difficulty:'Hard',progress:47,topics:['First law','Enthalpy','Entropy']}
 ]},
 {id:'mathematics',name:'Mathematics',icon:'∑',progress:61,chapters:[
  {id:'sets',name:'Sets',class:11,difficulty:'Easy',progress:90,topics:['Representation','Operations']},
  {id:'relations-functions',name:'Relations & Functions',class:11,difficulty:'Medium',progress:68,topics:['Relations','Functions','Graphs']},
  {id:'trigonometry',name:'Trigonometry',class:11,difficulty:'Medium',progress:63,topics:['Identities','Equations','Inverse functions']},
  {id:'quadratic',name:'Quadratic Equations',class:11,difficulty:'Medium',progress:55,topics:['Roots','Nature of roots']},
  {id:'sequence-series',name:'Sequence & Series',class:11,difficulty:'Hard',progress:49,topics:['AP','GP','Special series']}
 ]}
];

export const questions=[
 {id:'p1',subject:'Physics',chapter:'Work, Energy & Power',topic:'Work',difficulty:'Medium',exam:'JEE Main',type:'MCQ',text:'A force F = 3i + 4j N acts on a particle that moves through displacement 2i + j m. The work done is:',options:['6 J','10 J','12 J','14 J'],answer:1,explanation:'W = F·s = 3×2 + 4×1 = 10 J.',year:2024,tags:['vector','work']},
 {id:'p2',subject:'Physics',chapter:'Rotational Motion',topic:'Torque',difficulty:'Hard',exam:'JEE Advanced',type:'MCQ',text:'For a rigid body rotating about a fixed axis, torque is related to angular acceleration by which expression?',options:['τ = Iα','τ = mα','τ = Iω','τ = mr'],answer:0,explanation:'For a fixed axis, net external torque equals moment of inertia times angular acceleration.',year:2023,tags:['rotation','torque']},
 {id:'c1',subject:'Chemistry',chapter:'Atomic Structure',topic:'Quantum numbers',difficulty:'Medium',exam:'JEE Main',type:'MCQ',text:'The maximum number of electrons in a shell with principal quantum number n is:',options:['n²','2n²','2n','n³'],answer:1,explanation:'Maximum electrons in a shell = 2n².',year:2022,tags:['atomic','quantum']},
 {id:'c2',subject:'Chemistry',chapter:'Chemical Bonding',topic:'MOT',difficulty:'Hard',exam:'JEE Advanced',type:'MCQ',text:'Which molecular property is correctly connected with bond order?',options:['Higher bond order generally implies shorter bond length','Higher bond order implies longer bond length','Bond order does not affect bond strength','Bond order is always an integer'],answer:0,explanation:'Higher bond order generally correlates with stronger, shorter bonds.',year:2021,tags:['mot','bond-order']},
 {id:'m1',subject:'Mathematics',chapter:'Quadratic Equations',topic:'Roots',difficulty:'Easy',exam:'JEE Main',type:'MCQ',text:'If the roots of x² − 5x + 6 = 0 are α and β, then α+β equals:',options:['4','5','6','-5'],answer:1,explanation:'For ax²+bx+c, sum of roots = -b/a = 5.',year:2024,tags:['quadratic','roots']},
 {id:'m2',subject:'Mathematics',chapter:'Sequence & Series',topic:'AP',difficulty:'Medium',exam:'JEE Main',type:'Numerical',text:'Find the 10th term of the AP 3, 7, 11, ...',options:[],answer:39,explanation:'a=3, d=4; a10 = 3 + 9×4 = 39.',year:2023,tags:['ap','sequence']}
];

export const tests=[
 {id:'mock-main-01',title:'JEE Main Full Mock • 01',type:'Full Mock',exam:'JEE Main',duration:180,questions:90,difficulty:'Mixed',status:'Ready'},
 {id:'physics-ch-rot',title:'Physics • Rotational Motion',type:'Chapter Test',exam:'JEE Advanced',duration:45,questions:20,difficulty:'Hard',status:'Ready'},
 {id:'chem-atomic',title:'Chemistry • Atomic Structure',type:'Chapter Test',exam:'JEE Main',duration:30,questions:15,difficulty:'Medium',status:'Ready'},
 {id:'math-custom',title:'Mathematics • Custom Drill',type:'Custom',exam:'JEE Main',duration:40,questions:25,difficulty:'Mixed',status:'Ready'}
];

export const notes=[
 {id:'n1',title:'Complete Notes',chapter:'Work, Energy & Power',subject:'Physics',kind:'Notes PDF',url:'https://drive.google.com/'},
 {id:'n2',title:'Formula Sheet',chapter:'Rotational Motion',subject:'Physics',kind:'Formula',url:'https://drive.google.com/'},
 {id:'n3',title:'Quick Revision',chapter:'Chemical Bonding',subject:'Chemistry',kind:'Revision',url:'https://drive.google.com/'},
 {id:'n4',title:'Important Questions',chapter:'Quadratic Equations',subject:'Mathematics',kind:'Important',url:'https://drive.google.com/'}
];

export const formulas=[
 {subject:'Physics',chapter:'Work, Energy & Power',title:'Work by constant force',formula:'W = F s cos θ'},
 {subject:'Physics',chapter:'Laws of Motion',title:'Newton Second Law',formula:'F = ma'},
 {subject:'Chemistry',chapter:'Mole Concept',title:'Moles',formula:'n = m / M'},
 {subject:'Mathematics',chapter:'Quadratic Equations',title:'Quadratic formula',formula:'x = (−b ± √(b²−4ac)) / 2a'}
];

export const importantTopics=[
 {subject:'Physics',topic:'Rotational Motion',importance:'High Priority',main:true,advanced:true,difficulty:'Hard'},
 {subject:'Chemistry',topic:'Chemical Bonding',importance:'Must Revise',main:true,advanced:true,difficulty:'Hard'},
 {subject:'Mathematics',topic:'Quadratic Equations',importance:'Important',main:true,advanced:false,difficulty:'Medium'}
];
