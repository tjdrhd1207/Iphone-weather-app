import { parseString } from 'react-native-xml2js';
import weather from './weather';

export default function nodeWrapper (xmlDoc: any) {
    
    if (!xmlDoc) {
        console.error('xmlText is not defined or null');
        return;
    }
    parseString(xmlDoc, (err: Error, result: any) => {
        if (err !== null) {
            console.log("Error : " + err);
        }        
        let items = result.response.body[0].items[0].item;
        
        items.forEach((item: any, index: number) => {
            console.log(`---------${index}-------`);
            console.log('baseDate : ', item.baseDate);
            console.log('baseTime : ', item.baseTime);
            console.log('category : ', item.category);
            console.log('nx : ', item.nx);
            console.log('ny : ', item.ny);
            console.log('obsrValue : ', item.obsrValue);
            weather(item.category, item.obsrValue);
        });

    });
}