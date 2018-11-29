# coding:utf-8

import numpy as np

import keras
from keras.applications.mobilenetv2 import MobileNetV2
from keras.models import Sequential, Model
from keras.layers import Dense, Dropout, Flatten, Input
from keras.optimizers import Adam, SGD
from keras.preprocessing.image import ImageDataGenerator
from keras.utils.vis_utils import plot_model

def load_image():
    print("load image datasets")

def build_model():

    input_shape = Input(shape=(128,128,3))
    mobile_net = MobileNetV2(include_top=False, weights='imagenet', input_tensor=input_shape, pooling='avg')
    mobile_net.trainable = False
    mobile_net.summary()
    plot_model(mobile_net, to_file='./mobile_net.png', show_shapes=True)

    x_in = input_shape
    x = mobile_net(x_in)
    x = Dense(256, activation='relu')(x)
    x = Dropout(0.5)(x)
    x = Dense(6, activation='softmax')(x)
    model = Model(x_in, x)

    model.summary()
    plot_model(model, to_file='./train_model.png', show_shapes=True)
    return model

def main():
    model = build_model()

    model.compile(loss="categorical_crossentropy",optimizer=Adam(), metrics=['accuracy'])


if __name__ == '__main__':
    main()