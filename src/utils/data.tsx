const data = [
  //
  // Item 1
  //

  {
    id: 1,
    label: "Item 1",
    isExpanded: false,
  },

  //
  // Item 2
  //

  {
    id: 2,
    label: "Item 2",
    isExpanded: false,
    children: [
      {
        id: 21,
        label: "Item 2-1",
        isExpanded: false,
      },
      {
        id: 22,
        label: "Item 2-2",
        isExpanded: false,
      },
      {
        id: 23,
        label: "Item 2-3",
        isExpanded: false,
        children: [
          {
            id: 231,
            label: "Item 2-3-1",
            isExpanded: false,
          },
          {
            id: 232,
            label: "Item 2-3-2",
            isExpanded: false,
            children: [
              {
                id: 2321,
                label: "Item 2-3-2-1",
                isExpanded: false,
              },
              {
                id: 2322,
                label: "Item 2-3-2-2",
                isExpanded: false,
                children: [
                  {
                    id: 23221,
                    label: "Item 2-3-2-2-1",
                    isExpanded: false,
                  },
                  {
                    id: 23222,
                    label: "Item 2-3-2-2-2",
                    isExpanded: false,
                  },
                ],
              },
              {
                id: 2323,
                label: "Item 2-3-2-3",
                isExpanded: false,
              },
            ],
          },
        ],
      },
    ],
  },

  //
  // Item 3
  //

  {
    id: 3,
    label: "Item 3",
    isExpanded: false,
  },

  //
  // Item 4
  //

  {
    id: 4,
    label: "Item 4",
    isExpanded: false,
  },
];

export default data;
