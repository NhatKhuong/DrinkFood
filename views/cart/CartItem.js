import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/Cart_Styles";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
export default function CartItem(props) {
  const [isRemove, setIsRemove] = useState(false);
  const [amount, setAmount] = useState(1);
  const price = props.priceItem;

  return !isRemove ? (
    <View style={{ paddingBottom: 20 }}>
      <View style={styles.item}>
        <Image style={styles.imageItem} source={props.imageItem} />
        <View style={styles.infoItem}>
          <Text style={styles.nameItem} numberOfLines={1}>
            {props.productName}
          </Text>
          <Text style={styles.descriptions} numberOfLines={1}>
            {props.descriptions}
          </Text>
        </View>
        <View style={styles.priceAndAmount}>
          <View style={styles.upAndDownCustom}>
            <Text style={styles.textNum}>{amount}</Text>

            <TouchableOpacity
              style={styles.touchableOpacityUpDown}
              onPress={() => {
                setAmount(amount - 1);
                props.onPressMinus(price, props.id, amount - 1);
                if (amount < 1) setIsRemove(true);
              }}
            >
              <Entypo name="minus" size={10} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacityUpDown}
              onPress={() => {
                if (amount >= 10) Alert.alert("Vượt quá số lượng cho phép");
                else {
                  setAmount(amount + 1);
                  props.onPressPlush(price, props.id, amount + 1);
                }
              }}
            >
              <Entypo name="plus" size={10} color="#10b34f" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>
            <MaterialCommunityIcons
              name="currency-bdt"
              size={20}
              color="#4ed384"
            />
            {price * amount}
          </Text>
        </View>
      </View>
    </View>
  ) : null;
}
