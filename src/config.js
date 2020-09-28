/**
 * Defining URLs for calling API in server 
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */

export const edgeAPIs={
server : () =>`http://192.168.1.110:5000`,
bedroom:bedroom=>`${bedroom}/live/bedroom`,
kitchen:kitchen=>`${kitchen}/live/kitchen`,
living:living=>`${living}/live/livingroom`,
history:history=>`${history}/history`,
barChart:barChart=>`${barChart}/barchart`,
pieChart:pieChart=>`${pieChart}/piechart`,
prediction:prediction=>`${prediction}/prediction`,
predictionBedRoom:predictionBedRoom=>`${predictionBedRoom}/prediction/bedroom`,
predictionKitchen:predictionKitchen=>`${predictionKitchen}/prediction/kitchen`,
predictionLivingRoom:predictionLivingRoom=>`${predictionLivingRoom}/prediction/living`,
feedback:feedback=>`${feedback}/notification/feedback`,
sensor: sensor=>`${sensor}/metrics`,
}