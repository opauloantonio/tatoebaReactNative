import React from 'react';

import { ScrollView, Linking } from 'react-native';

import { Title, Text as RNText, Divider } from 'react-native-paper';

const repo = "https://github.com/opauloantonio/tatoebaReactNative";
const scraper = "https://github.com/opauloantonio/tatoeba-scraper";
const profile = "https://twitter.com/opauloantonio";
const ryou = "https://www.ryouflashcards.com/"

const Text = props => <RNText {...props} style={{ ...props.style, marginVertical: 10 }} />

const About = () => (
  <ScrollView style={{flex: 1, marginHorizontal: 16, marginVertical: 16}}>
    <Title style={{marginVertical: 16, color: "#4caf50"}}>
      About Tatoeba
    </Title>

    <Text>
      Tatoeba is a large database of sentences and translations. Its content is ever-growing and results from the voluntary contributions of thousands of members.
    </Text>

    <Text>
      Tatoeba provides a tool for you to see examples of how words are used in the context of a sentence. You specify words that interest you, and it returns sentences containing these words with their translations in the desired languages. The name Tatoeba (for example in Japanese) captures this concept.
    </Text>

    <Text>
      The project was founded by Trang Ho in 2006, hosted on Sourceforge under the codename of multilangdict.
    </Text>

    <Title style={{marginVertical: 16, color: "#4caf50"}}>
      About This App
    </Title>

    <Text>
      This is an unofficial app made by 
      {''} <Text style={{color: 'blue'}} onPress={() => Linking.openURL(profile)}>Paulo Antonio</Text>
      .
    </Text>

    <Text>
      The app is very simple because I made it mostly for learning more about React Native but also as a way to easily look up sentences on Tatoeba on my phone.
    </Text>

    <Text>
      At the moment I started working on it, the website was not responsive so I had to keep zooming in and out in order to use it on a mobile device.
    </Text>

    <Text>
      Tatoeba also didn't provide an API so I built a simple web scraper to get the data I needed on the fly. That's why the more complex features are not in the app.
    </Text>

    <Text>The project is open-source and its code can be found at </Text>

    <Text onPress={() => Linking.openURL(repo)} style={{color: 'blue'}}>
      {repo}
    </Text>

    <Text>
      The code for the web scraper can also be found at
    </Text>

    <Text onPress={() => Linking.openURL(scraper)} style={{color: 'blue'}}>
      {scraper}
    </Text>

    <Text>
      Any contributions or suggestions for any of these projects are welcome!
    </Text>

    <Divider />

    <Text>
      One more thing, if you're learning Japanese, check out my other app 
      {''} <Text onPress={() => Linking.openURL(ryou)} style={{color: 'blue'}}>Ryou Flashcards</Text> which
      has many features such as extensive search for kanji, vocabulary and radicals, SRS, practice, TTS and also example sentences from Tatoeba!
    </Text>
  </ScrollView>
);

export default About;
