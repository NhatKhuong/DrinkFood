import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles/Cart_Styles";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import {
  decreaseOrder,
  increaseOrder,
  removeData,
} from "../../asysn_storage/order_storage";
export default function CartItem(props) {
  const [isRemove, setIsRemove] = useState(false);
  const [amount, setAmount] = useState(props.total);
  const price = props.price;
  const id = props.id;

  return !isRemove ? (
    <View style={{ paddingBottom: 20 }}>
      <View style={styles.item}>
        <Image style={styles.imageItem} source={props.img} />
        <View style={styles.infoItem}>
          <Text style={styles.nameItem} numberOfLines={1}>
            {props.name}
          </Text>
          <Text style={styles.descriptions} numberOfLines={1}>
            {props.descrip}
          </Text>
        </View>
        <View style={styles.priceAndAmount}>
          <View style={styles.upAndDownCustom}>
            <Text style={styles.textNum}>{amount}</Text>

            <TouchableOpacity
              style={styles.touchableOpacityUpDown}
              onPress={() => {
                if (amount > 1) {
                  setAmount(amount - 1);
                  props.onPressMinus(price, id, amount - 1);
                  decreaseOrder(id);
                } else {
                  props.onPressMinus(price, id, amount - 1);
                  setIsRemove(true);
                  removeData(id);
                }
              }}
            >
              <Entypo name="minus" size={10} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacityUpDown}
              onPress={() => {
                setAmount(amount + 1);
                props.onPressPlush(price, id, amount + 1);
                increaseOrder(id);
              }}
            >
              <Entypo name="plus" size={10} color="#10b34f" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{(price * amount).toFixed(2)} đ</Text>
        </View>
      </View>
    </View>
  ) : null;
}
