# codig:utf-8 

import cv2
import numpy
import sys,os
import glob

src_path = "./datasets"
target_path = "."
cnt = 0

def serch_face(img_path, target_path, cnt):

    # 画像読み込み
    src_img = cv2.imread(img_path)
    gray_img = cv2.cvtColor(src_img, cv2.COLOR_RGB2GRAY)

    i = 0

    #Haar-like分類器読み込み
    cascade = cv2.CascadeClassifier("haarcascade_frontalface_alt.xml")

    #カスケード実行して検出した顔の座標情報を格納
    facerect = cascade.detectMultiScale(gray_img, scaleFactor=1.1, minNeighbors=2, minSize=(30,30))
    if len(facerect)> 0:
        for rect in facerect:
            x = rect[0]
            y = rect[1]
            width = rect[2]
            height = rect[3]
            dst = src_img[y:y+height, x:x+width]

            #保存
            dst = cv2.resize(dst, (128, 128))
            cv2.imwrite("%s/img_%04d%02d.jpg" % (target_path, cnt, i), dst)

            print ("saved img%4d%02d.jpg !" %(cnt,i))
            i += 1
    else:
        print("no face...")

#serch_face("lena.jpg", target_path, cnt)

image_path_list = glob.glob(src_path+"/*")
print(image_path_list)

for image_path in image_path_list:
    print ("search face in:" + image_path)
    serch_face(image_path, target_path, cnt)

    cnt += 1
