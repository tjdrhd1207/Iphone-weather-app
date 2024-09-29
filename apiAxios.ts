import { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import nodeWrapper from './nodeWrapper';

export const useAxios = () => {
    const [apiData, setApiData] = useState<any>();
    useEffect(() => {
        const fetchData = async() => {
            const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
            let queryParam = '?' + encodeURIComponent('serviceKey') + '=' + '5sfVxbEWdsbyFaw0LgO5tEMq%2Bl%2FppL2pBZ5swup%2FqnnGsmE%2FOPQEP%2Bbaz%2FtTTpP7j0WqWhbkg6O5O8OlVP7DPw%3D%3D'; /* 서비스 키 */
            queryParam += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
            queryParam += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
            queryParam += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /**/
            queryParam += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(getCurrentDate()); /**/
            queryParam += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
            queryParam += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
            queryParam += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
            console.log(url);
            
            // try {
            //     await axios({
            //         method: 'get',
            //         url: url + queryParam,
            //     }).then((res) => {
            //         const resultXML = res.data;
            //         const parser = new xml2js.Parser();
            //         parser.parseString(resultXML, (err, result) => {
            //             if (err) {
            //                 console.error('파싱에러 : '+err);
            //             } else {
            //                 // console.log(result.response.body[0].items[0].item);
            //                 setApiData(result);
            //             }
            //         })
            //     }).catch(function(err) {
            //         console.log(err);
            //     });
            // } catch (err) {
            //     console.error(err);
            // }
            axios({
                method: 'get',
                url: url + queryParam,                
            }).then((res) => {
                nodeWrapper(res.data);
                setApiData(res.data);
            });
    }
    fetchData();
    }, []);
    
    return { apiData };
};

const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '00'); // 월(0부터 시작)
    const day = String(date.getDate()).padStart(2, '0'); // 일

    return `${year}${month}${day}`;
}

