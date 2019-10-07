
# -*- coding: utf-8 -*-

import os
import json

imageFileNameSuffixTuple = ('.jpg', '.png', '.jpeg')


def getSuffix(fileName):
    return os.path.splitext(fileName)[1].lower()


def isImageFile(fileName):
    return getSuffix(fileName) in imageFileNameSuffixTuple


if __name__ == "__main__":
    # prefix = input()
    jsonPath = './users.json'
    with open(jsonPath, 'r') as jsonFile:
        dic = json.load(jsonFile)
    # print(dic[0])
    fileCount = 0
    for root, dirs, files in os.walk('.'):
        for fileName in files:
            if isImageFile(fileName):
                os.rename(fileName, dic[fileCount]['_id']+getSuffix(fileName))
                # os.rename(fileName, prefix+str(fileCount).zfill(4) +
                #           getSuffix(fileName))
                fileCount += 1
    if fileCount <= 1:
        print(fileCount, 'file has been successfully renamed!\n')
    else:
        print(fileCount, 'files have been successfully renamed!\n')
