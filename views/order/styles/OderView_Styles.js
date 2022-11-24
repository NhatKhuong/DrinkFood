import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchableOpacityBack: {
    borderRadius: 30,
  },
  textHeader: {
    paddingRight: 60,
    width: "100%",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  body: {
    width: "100%",
    height: "50%",
  },
  itemOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  amount: {
    fontSize: 17,
    fontWeight: "bold",
    borderWidth: 1,
    paddingHorizontal: 3,
    textAlign: "center",
    borderColor: "rgba(0,0,0,0.2)",
    color: "#3db072",
  },
  infoItem: {
    width: "50%",
    height: 50,
    justifyContent: "space-around",
  },
  nameProduct: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptions: {
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.7,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3db072",
  },
  footer: {
    width: "100%",
    height: 300,
    justifyContent: "space-between",
    paddingTop: 20,
  },
  footerInfoTotal: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  footerLine: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textFooter: { fontSize: 18, fontWeight: "400" },
  details: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  textDetail: {
    fontSize: 18,
    fontWeight: "400",
    color: "#3db072",
  },
  buttonContinue: {
    width: "100%",
    backgroundColor: "#22a45d",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textContinue: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    color: "#e9f6ef",
    opacity: 0.9,
  },
  imageItem: {
    width: 55,
    height: 55,
  },
});

export default styles;
