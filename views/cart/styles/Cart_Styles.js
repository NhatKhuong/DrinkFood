import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchableOpacityBack: {
    backgroundColor: "rgba(150,150,150,0.1)",
    borderRadius: 30,
    padding: 8,
  },
  textHeader: {
    paddingRight: 60,
    width: "100%",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  body: { width: "100%", height: "67%" },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor: "rgba(100,100,130,0.1)",
    justifyContent: "space-between",
    height: 75,
    alignItems: "center",
    borderRadius: 15,
  },
  imageItem: {
    width: 55,
    height: 55,
  },
  infoItem: {
    height: "90%",
    justifyContent: "space-around",
    width: "55%",
  },
  nameItem: {
    fontSize: 17,
    fontWeight: "500",
  },
  descriptions: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
    fontWeight: "400",
  },
  priceAndAmount: {
    width: 70,
    height: "85%",
    justifyContent: "space-between",
  },
  upAndDownCustom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchableOpacityUpDown: {
    borderRadius: 30,
    backgroundColor: "#fff",
    padding: 6,
    shadowColor: "#453d3d",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 16,
  },
  textNum: {
    backgroundColor: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    width: "100%",
    borderRadius: 20,
    shadowColor: "#7ed297",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.23,
    shadowRadius: 12.81,
    elevation: 16,
  },
  price: {
    width: "100%",
    textAlign: "right",
    color: "#5ce393",
    fontWeight: "bold",
    fontSize: 17,
  },
  footer: {
    width: "100%",
    height: 170,
    justifyContent: "space-between",
    backgroundColor: "rgba(100,100,130,0.1)",
    borderRadius: 15,
    paddingTop: 20,
  },
  footerInfoTotal: {
    width: "100%",
    paddingHorizontal: 15,
    height: 85,
    justifyContent: "space-between",
  },
  footerLine: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textFooter: { fontSize: 18, color: "rgba(0,0,0,0.3)", fontWeight: "bold" },
  buttonCheckout: {
    backgroundColor: "#35c36d",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textCheckout: {
    fontSize: 17,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "600",
  },
});

export default styles;
