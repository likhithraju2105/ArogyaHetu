import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-elements';
import axios from 'axios';

class Factoids extends Component {
  state = {
    DATA: [
      {
        banner:
          "Don't hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you!",
        id: '1',
      },
      {
        banner:
          "Be compassionate! Help those in need like the elderly and poor. They are facing a crisis which we can't even imagine!",
        id: '2',
      },
      {
        banner:
          'Be considerate. While buying essentials remember that you need to share with 130 crore fellow citizens!',
        id: '3',
      },
      {
        banner:
          'Going out to buy essentials? Social Distancing is KEY! Maintain at least 2 metres distance between each other in the line.',
        id: '4',
      },
      {
        banner:
          'Plan ahead! Take a minute and check how much supplies you have at home. Planning lets you buy exactly what you need.',
        id: '5',
      },
      {
        banner:
          'Plan and calculate your essential needs for the next three weeks.',
        id: '6',
      },
      {
        banner:
          'Help out the elderly by bringing them their groceries and other essentials.',
        id: '7',
      },
      {
        banner:
          'Help out your employees and domestic workers by not cutting their salaries. Show the true Indian spirit!',
        id: '8',
      },
      {
        banner:
          'Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe!',
        id: '9',
      },
      {
        banner: 'Panic mode : OFF! ❌\nESSENTIALS ARE ON! ✔️',
        id: '10',
      },
      {
        banner:
          'Your essential needs will be taken care of by the government in a timely manner. Please do not hoard.',
        id: '11',
      },
      {
        banner:
          'Be a true Indian. Show compassion, Be considerate,Help those in need. We will get through this!',
        id: '12',
      },
      {
        banner:
          'If you have symptoms and suspect you have coronavirus - reach out to your doctor or call state helplines. 📞 Get help.',
        id: '13',
      },
      {
        banner:
          'Stand against FAKE news and illegit WhatsApp forwards! Do NOT ❌ forward a message until you verify the content it contains.',
        id: '14',
      },
      {
        banner:
          'If you have any medical queries, reach out to your state helpline, district administration or trusted doctors!',
        id: '15',
      },
      {
        banner:
          'Wash your hands with soap and water often, especially after a grocery run. Keep the virus at bay.',
        id: '16',
      },
      {
        banner:
          'There is no evidence that hot weather will stop the virus! You can! Stay home, stay safe.',
        id: '17',
      },
      {
        banner: 'Help the medical fraternity by staying at home!',
        id: '18',
      },
      {
        banner:
          'Avoid going out during the lockdown. Help break the chain of spread.',
        id: '19',
      },
      {
        banner:
          'Call up your loved ones during the lockdown, support each other through these times.',
        id: '20',
      },
      {
        banner:
          'The virus does not discriminate. Why do you? DO NOT DISCRIMINATE. We are all Indians!',
        id: '21',
      },
      {
        banner:
          'Our brothers from the North-East are just as Indian as you! Help everyone during this crisis ❤️',
        id: '22',
      },
      {
        banner:
          "Get in touch with your local NGO's and district administration to volunteer for this cause.",
        id: '23',
      },
      {
        banner:
          'This will pass too. Enjoy your time at home and spend quality time with your family! Things will be normal soon.',
        id: '24',
      },
      {
        banner:
          '#BreakTheChain of unverified WhatsApp forwards which spread wrong information! Do not forward unless you verify it.',
        id: '25',
      },
    ],
    setFact: '#StayHomeStaySafe',
  };
  componentDidMount() {
    // this.state.DATA.map((facto) => {
    //   console.log(facto[0]);
    // });
    setInterval(() => {
      const x = Math.floor(Math.random() * 24) + 1;
      this.setState({ setFact: this.state.DATA[x].banner });
    }, 3500);
  }
  render() {
    // console.log(this.state.factsArray);
    return (
      <View>
        <Card>
          <Text style={{ height: 90 }}>{this.state.setFact}</Text>
        </Card>
      </View>
    );
  }
}

export default Factoids;

const styles = StyleSheet.create({});
