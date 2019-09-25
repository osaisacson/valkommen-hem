window.Dataset = {
  //Factory to create an incremented set of numbers
  increment: (function(lowest, highest) {
    var set = [];
    for (var i = lowest; i <= highest; i++) {
      set.push(i);
      set.push(i + 0.5); //incrementation step
    }

    return set;
  })(0, 10), //starts at 0, ends at 10

  production: [
    {
      id: '1',
      icon: '',
      title: 'Vattenåtervinning',
      unit: 'liter',
      lastMonth: 122542,
      thisMonthStart: 12303,
      thisMonthEnd: 13370,
      thisMonthDuration: 17000,
      thisYearStart: 1422092,
      thisYearEnd: 1422230,
      thisYearDuration: 2000,
      quoteBefore: 'Vilket betyder att vi sparat ',
      quoteStart: 1422092,
      quoteEnd: 1422230,
      quoteDuration: 2000,
      quoteUnit: 'liter',
      quoteAfter: ' hittills i år på att återvinna eget vatten'
    },
    {
      id: '2',
      icon: '',
      title: 'Vattenåtervinning',
      unit: 'liter',
      lastMonth: 122542,
      thisMonthStart: 12303,
      thisMonthEnd: 13370,
      thisMonthDuration: 17000,
      thisYearStart: 1422092,
      thisYearEnd: 1422230,
      thisYearDuration: 2000,
      quoteBefore: 'Vilket betyder att vi sparat ',
      quoteStart: 1422092,
      quoteEnd: 1422230,
      quoteDuration: 2000,
      quoteUnit: 'liter',
      quoteAfter: ' hittills i år på att återvinna eget vatten'
    },
    {
      id: '3',
      icon: '',
      title: 'Vattenåtervinning',
      unit: 'liter',
      lastMonth: 122542,
      thisMonthStart: 12303,
      thisMonthEnd: 13370,
      thisMonthDuration: 17000,
      thisYearStart: 1422092,
      thisYearEnd: 1422230,
      thisYearDuration: 2000,
      quoteBefore: 'Vilket betyder att vi sparat ',
      quoteStart: 1422092,
      quoteEnd: 1422230,
      quoteDuration: 2000,
      quoteUnit: 'liter',
      quoteAfter: ' hittills i år på att återvinna eget vatten'
    }
  ],

  harvest: [
    {
      id: '1',
      img:
        'https://images.unsplash.com/photo-1508595165502-3e2652e5a405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Basilika',
      subtitle: 'Extra söt denna veckan!',
      clickedText: 'Redo att hämtas imorgon 12:00',
      class: 'bokad'
    },
    {
      id: '2',
      img:
        'https://images.unsplash.com/photo-1508061461508-cb18c242f556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Pak Choi',
      clickedText: 'Redo att hämtas på fredag 12:00',
      class: 'bokad'
    },
    {
      id: '3',
      img:
        'https://images.unsplash.com/photo-1528796940112-4979b4a98424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
      title: 'Koriander',
      clickedText: 'Redo att hämtas på torsdag 18:00',
      class: 'bokad'
    }
  ]
};
