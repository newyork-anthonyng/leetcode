const myModule = require('./overview');
const { createParentList, createOverview } = myModule;

describe('createOverview', () => {
  it('should create simple overview', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth'],
      },
    ];

    expect(createOverview(structure)).toMatchSnapshot();
  });

  it('should create overview with nested overview (none selected)', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth',
        { title: 'Other', docs: ['Seventh', 'Eighth'] },
      ],
    },
  ];

  expect(createOverview(structure)).toMatchSnapshot();
});

it('should include ToC for simple overview when selected', () => {
  const structure = [
    {
      title: 'Installation',
      docs: ['First', 'Second', 'Third'],
    },
    {
      title: 'Bundler Integration',
      docs: ['Fourth', 'Fifth', 'Sixth'],
    },
  ];

  expect(createOverview(structure, 'Second', '<h1>Table of Contents</h1>')).toMatchSnapshot();
});

it('should create overview when nested overview is selected', () => {
  const structure = [
    {
      title: 'Installation',
      docs: ['First', 'Second', 'Third'],
    },
    {
      title: 'Bundler Integration',
      docs: ['Fourth', 'Fifth', 'Sixth',
      { title: 'Other', docs: ['Seventh', 'Eighth'] },
    ],
  },
];

expect(createOverview(structure, 'Other')).toMatchSnapshot();
});

it('should create ToC for when child of nested overview is selected', () => {
  const structure = [
    {
      title: 'Installation',
      docs: ['First', 'Second', 'Third'],
    },
    {
      title: 'Bundler Integration',
      docs: ['Fourth', 'Fifth', 'Sixth',
        { title: 'Other', docs: ['Seventh', 'Eighth'] },
      ],
    },
  ];

  expect(createOverview(structure, 'Seventh', '<h1>Table of Contents</h1>')).toEqual();
});
});

describe('createParentList', () => {
  it('should create correct parent list of simple structure', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth'],
      },
    ];

    expect(createParentList(structure)).toMatchSnapshot();
  });

  it('should create correct parent list of nested structure', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth',
          { title: 'Other', docs: ['Seventh', 'Eighth'] },
        ],
      },
    ];

    expect(createParentList(structure)).toMatchSnapshot();
  });

  it('should handle multiple nested structures', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth',
          { title: 'Other', docs: ['Seventh', 'Eighth'] },
          { title: 'Another', docs: ['Ninth', 'Tenth', 'Eleventh'] },
        ],
      },
    ];

    expect(createParentList(structure)).toMatchSnapshot();
  });

  it('should handle deeply nested structures', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth',
          { title: 'Other', docs: ['Seventh', 'Eighth',
              { title: 'Deeply Nested', docs: ['Ninth', 'Tenth'] },
            ],
          },
        ],
      },
    ];

    expect(createParentList(structure)).toMatchSnapshot();
  });

  it('should handle multiple deeply nested structures', () => {
    const structure = [
      {
        title: 'Installation',
        docs: ['First', 'Second', 'Third'],
      },
      {
        title: 'Bundler Integration',
        docs: ['Fourth', 'Fifth', 'Sixth',
          { title: 'Other', docs: ['Seventh', 'Eighth',
              { title: 'Deeply Nested', docs: ['Ninth', 'Tenth'] },
            ],
          },
          { title: 'Another', docs: ['Eleventh', 'Twelfth',
              { title: 'Another Deeply Nested', docs: ['Thirteenth', 'Fourteenth'] },
            ],
          },
        ],
      },
    ];

    expect(createParentList(structure)).toMatchSnapshot();
  });
});
