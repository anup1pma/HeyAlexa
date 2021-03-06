import { Post } from './post.model';

export const POSTS: Post[] = [
   {userLevel: 'Expert', id: '1', voteCount: 500, content: "If multiple people in your home have Amazon accounts, you can add them to your Alexa household profile. To check which profile is currently being used, simply ask, 'Alexa, which profile is this?' And to switch profiles, say, 'Alexa, switch profiles.' while adding additional members does not give you separate shopping or to-do lists, it does allow you to share content libraries. Beware, though, as it also allows them to use your Prime account to order items.", title: 'Make profiles for every family member', username: 'John', tags:['household', 'profile']},
   {userLevel: 'Average', id: '2', voteCount: 100, content: "Whether you have someone in your house by the name Alexa or you're tired of Amazon's commercials waking your speaker, changing the device's wake word is often the best course of action. Unfortunately, you can't set your own wake word (yet), but you can choose between Alexa, Amazon, Computer or Echo. To select one of the three alternate wake words, open the Alexa app or echo.amazon.com, open Settings, choose your Echo device, click Wake Word, choose one of the four options from the dropdown menu and click Save.", title: 'Change the wake word', username: 'Aman', tags:['configure', 'command']},
   {userLevel: 'Master', id: '3', voteCount: 200, content: "If you ever miss one of Alexa's responses or need her to repeat something, just ask. Say, 'Alexa, can you repeat that?'' or, 'Alexa, can you say that again?' She will repeat what she just said as many times as you need. You can also look up recent responses in the Home tab of the Alexa app, as well as listen to the recordings of the things you've said to Alexa.", title: 'Can you say that again?', username: 'Ricky', tags:['configure', 'repeat command']}

 ];
