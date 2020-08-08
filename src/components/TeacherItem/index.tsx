import React from "react";
import {Image, Text, View} from "react-native";

import styles from "./styles";
import {RectButton} from "react-native-gesture-handler";

import hertOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherList() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https:github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Jamir peroba</Text>
                    <Text style={styles.subject}>matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                uuashduasdh asudhasud hasduashd asuhsu dhasud usadh asuashu ashsa udahs das duash
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/ hora { '   ' }
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton,styles.favorited]}>
                        <Image source={unFavoriteIcon}/>
                        {/*<Image source={hertOutlineIcon}/>*/}
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherList;