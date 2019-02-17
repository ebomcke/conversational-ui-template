export default {
  id: 'default',
  description: 'Small tutorial to understand the conversation flow',
  displayedText: 'Start the default conversation',
  user: 'system-user',
  steps: [
    {
      id: 'conversation-start',
      text: 'Hey there, want to see how the conversation flow works ?'
    },
    {
      id: 'conversation-tutorial-1',
      text: 'Cool, here it goes.'
    },
    {
      id: 'nope',
      text: 'Okay then'
    },
    {
      id: 'conversation-end',
      text: 'Hope you enjoyed the demo'
    }
  ],
  flow: [
    {
      from: 'conversation-start',
      to: [
        {
          id: 'accept',
          step: 'conversation-tutorial-1',
          displayedText: 'Yes'
        },
        {
          id: 'decline',
          step: 'nope',
          displayedText: 'No'
        }
      ]
    }, {
      from: 'conversation-tutorial-1',
      to: 'conversation-end',
      displayedText: 'Continue'
    }
  ]
}
