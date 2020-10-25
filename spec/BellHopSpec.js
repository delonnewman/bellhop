// jshint esversion: 6

var ZOOM_STATE = {
    "socketStatus": {
        "commandSocketUrl": "wss://zoomva3233132186rwg.cloud.zoom.us/webclient/94674053963?dn2=QWxidXF1ZXJxdWUgTm9ydGhlYXN0&zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWIiLCJjbHQiOjAsInN0ayI6Ilo4QlB2NmdnQmZ1dk5ybkdyRGZWdXEwT0JiX1pJRU9fdkgwajlpRGYtT2suQmdjVFlXSnhibVZqYjI1blFHZHRZV2xzTG1OdmJVQXlOR00zT0RGalpUUXhNMkZrT0RFd1kyVmxZbVpoTlRWaU56a3lORE5rT1RabU1qZGlNVEUyTmpaaU9UZ3dabVF5WkdGa1pXWTNZVEV3TW1NeU5XWTBBQk0zTXpJNU16ZzROemc1TVRBNE5qRTVPREU1QUFSMWN6QXlBQUFCZFZ4emg3b0FFblVBIiwiYXVkIjoiY2xpZW50IiwidWlkIjoidlhRU0dOUkVSdWU2Rzk1TXktdlVBQSIsImR2Y2lkIjoiOTUzNTMzZTczMDYzNGZmOWE0Mjg1YWIzNmRkMDdhNDMiLCJzdHkiOjEwMCwid2NkIjoidXMwMiIsImV4cCI6MTYwMzU3NDc3Niwic21zX3V1aWQiOiIiLCJpYXQiOjE2MDM1NzM4NzYsImFpZCI6ImNGU1h2aGJtU0Zpa1ZPR2ZzRXNxM3ciLCJjaWQiOiIifQ.rtBTDL7-KbNha_hc4Y9GrTAPDStFCdK1d70U7DWHCZQ&ts=1603573876665&auth=zinZ-sQCYSlMNlkSUvd1MxFkIZ-FFxGkf9_nG7AsvYk&trackAuth=A0zM-hvFmjKexI8KUJ8zN3TQWJg45pll6dIveHCa_vk&mid=KFIzlCxsTK%2ByFJXs0r32mg%3D%3D&tid=WEB_2b6f993219ab612013da27dc09d76dcd&browser=Chrome86&ZM-CID=532c13e5-78e6-476d-971b-e95079f05104&lang=en&_ZM_MTG_TRACK_ID=953533e730634ff9a4285ab36dd07a43&wccv=2.5.0&rwcAuth=MTYwMzU3Mzg3NzI1NS5dzEhWGVu_MyTR0_ZvukHI7WU5s_GOQ7Jrd8dAStBQAQ&as_type=2&cfs=0",
        "bandWidth": 0,
        "initAudioEncodeStatus": "success",
        "initAudioDecodeStatus": "success",
        "initVideoEncodeStatus": "success",
        "initVideoDecodeStatus": "success",
        "xmppSocketStatus": "close",
        "isSplitSharing": true
    },
    "meeting": {
        "waterMarkText": "abqnecong",
        "baseUrl": "https://us02web.zoom.us",
        "baseStaticUrl": "https://us02st3.zoom.us/static/94101",
        "loading": false,
        "resetTime": 0,
        "confId": "28523394-2C6C-4CAF-B214-95ECD2BDF69A",
        "conID": "814E8AC7-7269-03BC-BD79-1AC42E0D03AE",
        "e2eEncrypt": true,
        "defaultAvatar": "https://us02st3.zoom.us/static/94101/webclient/image/attendee.png",
        "h323Avatar": "https://us02st3.zoom.us/static/94101/webclient/image/attendee_h323.png",
        "debug": false,
        "xmppDebug": false,
        "userName": "Albuquerque Northeast",
        "inviteEmail": "",
        "meetingNumber": 94674053963,
        "meetingId": "KFIzlCxsTK+yFJXs0r32mg==",
        "headMN": "946 7405 3963",
        "dialogMN": "946 7405 3963",
        "meetingTopic": "NE Weekly Field Service Meetings",
        "bNoHostTimeOut": false,
        "isSupportAV": true,
        "zoomId": "RF2OroXV1gOKXHE70tL0bQ",
        "svcUrl": "zoomva3233132186rwg.cloud.zoom.us",
        "zak": "eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWIiLCJjbHQiOjAsInN0ayI6Ijl3V1NDdUpXNV8yQ1ZWeHd5Nm5oS1hFZlNOOVppOWw5ZmF2cFRpa201VTAuQmdjVFlXSnhibVZqYjI1blFHZHRZV2xzTG1OdmJVQXlOR00zT0RGalpUUXhNMkZrT0RFd1kyVmxZbVpoTlRWaU56a3lORE5rT1RabU1qZGlNVEUyTmpaaU9UZ3dabVF5WkdGa1pXWTNZVEV3TW1NeU5XWTBBQk0zTXpJNU16ZzROemc1TVRBNE5qRTVPREU1QUFSMWN6QXlBQUFCZFZ5enBIOEFFblVBIiwiYXVkIjoiY2xpZW50IiwidWlkIjoidlhRU0dOUkVSdWU2Rzk1TXktdlVBQSIsImR2Y2lkIjoiOTUzNTMzZTczMDYzNGZmOWE0Mjg1YWIzNmRkMDdhNDMiLCJzdHkiOjEwMCwid2NkIjoidXMwMiIsImV4cCI6MTYwMzU3ODk3OCwic21zX3V1aWQiOiIiLCJpYXQiOjE2MDM1NzgwNzgsImFpZCI6ImNGU1h2aGJtU0Zpa1ZPR2ZzRXNxM3ciLCJjaWQiOiIifQ.IRWRiuf8LCNz3F6CoVxq4oY9vEq08_XAKiIIcU2CBuA",
        "auth": "5OYH8hiRZVrMAQDeFgDRr7byvpUlPD1L1kPGTMT9q_4",
        "trackAuth": "R466b931koE1zDN1vNn9Dp-PSXIeFPj857tME7ECeks",
        "tid": "WEB_31d0723fff889cdf1302a91d3b106c70",
        "ts": "1603578078332",
        "encryptedRWC": {
            "rwcva.cloud.zoom.us": "xVDEgeaxZke1JHXhidkEr61uZlB7paUEBzV8pgUbUVA",
            "rwcff.cloud.zoom.us": "Y4XKyR90T9adWdK2oSl2hrvaFDoWY2k05FZBrrvWzCw"
        },
        "startPingRWC": 388.26500007417053,
        "selectDailinCountry": null,
        "selectCallOutCountry": {
            "value": "",
            "label": "",
            "code": ""
        },
        "selectCallOutCountry2": {
            "value": "",
            "label": "",
            "code": ""
        },
        "callOutPhoneNumber": null,
        "phoneNumberCookie": null,
        "invitePhoneNumber": "",
        "inviteUserName": "",
        "encType": 2,
        "inviteRSInfo": {
            "ip": "",
            "type": 0,
            "encrypt": 0
        },
        "inviteRSResult": {
            "result": 0,
            "transID": 0
        },
        "renameValue": null,
        "password": "198304",
        "h323password": "198304",
        "isHost": true,
        "isOriginhost": true,
        "isWebinar": 0,
        "canRecording": 0,
        "autoRecording": 0,
        "supportCallOut": 0,
        "supportH323": 0,
        "h323GatewayInfo": "",
        "meetingOptions": {
            "isShareWhiteboardEnabled": false,
            "isChatEnabled": false,
            "isAllowBreakoutRoomPreAssign": true,
            "allowParticipantsRename": true,
            "isShareOptionLocked": true,
            "allowPutOnHold": true,
            "allowParticipantsRenameLocked": false,
            "isScreenShareEnabled": true,
            "isBO100Enabled": false,
            "isEnableMuteParticipantsUponEntry": true,
            "isGroupHDEnabled": false,
            "isEnableMeetingWatermark": false,
            "isAllowShareZMWindowEnabled": false,
            "isReportParticipantsEnabled": true,
            "isPrivateChatEnabled": false,
            "isUserEnableRecordingReminder": false,
            "isLocalRecordingEnabled": false,
            "isEnableClosedCaption": false,
            "isRemoteControlEnbaled": false,
            "isPrivateChatLocked": true,
            "isEnableAutomaticDisplayJoinAudioDialog": true,
            "isAllowChatAndRaiseChime": false,
            "enableWaitingRoom": true,
            "isMeetingScreenSharingGrabAll": false,
            "isChatLocked": false,
            "isEnableMeetingControlToolBar": true,
            "isCOHostEnabled": true,
            "isEnableEncryption3rdParty": true,
            "isShareScreenHostOnly": true,
            "isEnableBreakoutRoom": true,
            "playUserJoinLeaveAudio": false,
            "nonverbalfeedback": true,
            "isWaitingRoomLocked": true,
            "isWaterMarkLocked": true
        },
        "support3rdPartyAudio": 0,
        "retry": false,
        "meetingJoinStatus": "joined",
        "errorCode": 0,
        "dialOutErrorCode": 0,
        "dialOutSuccess": false,
        "bRecord": false,
        "bLock": false,
        "lockStatus": "",
        "bCanUnmute": true,
        "bMutedUponEntry": true,
        "bHoldUponEntry": true,
        "bAllowShowCount": false,
        "bAllowRaiseHand": true,
        "bCanUnmuteVideo": false,
        "bAllowAttendeeRename": true,
        "bAllowMessageFeedbackNotify": false,
        "bAllowPlayChimeForEnterOrExit": false,
        "bHasRMC": false,
        "vgaType": 2,
        "viewOnly": 0,
        "listenOnlyPhone": 0,
        "currentUser": {
            "userRole": 5,
            "userId": 16778240,
            "participantId": 254887,
            "displayName": "Albuquerque Northeast",
            "res": 0,
            "audio": "computer",
            "muted": true,
            "avatar": "",
            "isHost": false,
            "bCoHost": false,
            "hasAsn": false,
            "bHold": false,
            "bRaiseHand": false,
            "feedback": 0,
            "userType": 0,
            "sharerOn": false,
            "sharerPause": false,
            "bLocalRecord": false,
            "isAllowTalk": false,
            "isGuest": false,
            "bCanAdmit": false,
            "videoSsrc": 16778242,
            "bCCEditor": false,
            "bVideoOn": false
        },
        "callOut": {
            "phoneNumber": "",
            "status": ""
        },
        "recordStatus": "",
        "showParticipantsWindow": false,
        "handleUser": {
            "userId": null,
            "userName": null
        },
        "rwcResponse": [
            {
                "rwg": "zoomva3233132186rwg.cloud.zoom.us",
                "rwcAuth": "MTYwMzU3Mzg3NzI1NS5dzEhWGVu_MyTR0_ZvukHI7WU5s_GOQ7Jrd8dAStBQAQ",
                "fromNginx": false
            },
            {
                "rwg": "zoomff312112094rwg.cloud.zoom.us",
                "rwcAuth": "MTYwMzU3Mzg3NzU1My4VVTgy-CtmabZlMuAeAtskVwBRXQgZw41n7RKzqC5b5A",
                "fromNginx": false
            }
        ],
        "bBroadcast": true,
        "isReconnectingXMPP": false,
        "isXMPPPromote": false,
        "isFailoverToSocketClose": true,
        "isNowFailoverInProgress": false,
        "avAbility": {
            "canSharingDecode": true,
            "canSharingEncode": true,
            "canVideoDecode": true,
            "canVideoEncode": true,
            "canAudioDecode": true,
            "canAudioEncode": true
        },
        "isJoinVoIPLoading": false,
        "isUserForbidShare": false,
        "preHoldVoIPStatus": false,
        "preAudioVoIPStatus": false,
        "meRaiseHandAsAttendee": false,
        "xmppUserHandAudio": "",
        "restartWebRtcTime": 0,
        "chatPriviledge": 4,
        "bAllowAttendeeChat": true,
        "xmppUserList": {
            "host": [],
            "panelists": [],
            "attendees": []
        },
        "isPanelistTab": true,
        "isParticipantsRemoveMode": false,
        "isCCPermission": true,
        "closedCaption": {
            "bCCEditorAssigned": false,
            "enableClosedCaption": false,
            "showClosedCaptionTool": false,
            "listenClosedCaption": false,
            "showClosedCaptionWindow": false,
            "closedCaptionMessages": [],
            "closedCaptionMessagesTemp": "",
            "showClosedCaptionAssignTip": false,
            "showClosedCaptionAvailableTip": false,
            "tempRealTimeClosedCaption": "",
            "targetToAssign": null,
            "showAssignCCConfirm": false
        },
        "messageLatest": "",
        "nonverbalFeedbackCount": {
            "handshake": 0,
            "yes": 0,
            "no": 0,
            "slower": 0,
            "faster": 0,
            "dislike": 0,
            "like": 0,
            "clap": 0,
            "coffee": 0,
            "away": 0,
            "more": 0
        },
        "isWebClientReseting": false,
        "admitAllSilentUsersStarted": false,
        "bIbDisableShare": false,
        "bIbDisableChat": false,
        "rwgRetryCount": 0,
        "webinarToken": null,
        "isWaitingRoomLoading": false,
        "userGUID": "445D8EAE-85D5-D603-8A5C-713BD2D2F46D",
        "region": "the United States",
        "network": "Zoom Global Network",
        "gatewayInfoList": [],
        "evt": 4098,
        "encryptKey": "GcgNwbkJHElGD3ETqq0-gTQrlX0tyuTUq4gqG12bCT0"
    },
    "meetingUI": {
        "isOnHold": false,
        "fullScreen": false,
        "showMeetingLockedTip": false,
        "windowSize": {
            "width": 1422,
            "height": 1293
        },
        "muteAll": null,
        "showParticipants": true,
        "showAttendeeList": false,
        "showJoinDialog": false,
        "rememberPNChecked": false,
        "rememberLockChecked": false,
        "showInviteDialog": false,
        "showMenu": false,
        "showAudioMenu": false,
        "showMicDisallowMenu": false,
        "showShareDisallowMenu": false,
        "showNoSupportInfo": true,
        "showRightContainer": true,
        "perViewNum": 6,
        "joinConfType": 1,
        "inviteConfType": 1,
        "rightContainerWidth": 400,
        "callOut": {
            "phoneNumber": "",
            "showStatus": false,
            "seq": 0
        },
        "isCalling": false,
        "invite": {
            "phoneNumber": "",
            "showIndication": false,
            "seq": 0
        },
        "inviteSeq": [],
        "copied": "",
        "copiedURL": "",
        "windowZIndex": 1006,
        "isResizeWindow": false,
        "meetingHeadType": 0,
        "mergeAudioVisible": false,
        "mergeAudioType": null,
        "mergedParticipant": null,
        "showWaitingRoomNotification": false
    },
    "attendeesList": {
        "attendeesList": [
            {
                "userRole": 5,
                "userId": 16778240,
                "participantId": 0,
                "displayName": "Albuquerque Northeast",
                "res": {},
                "audio": "computer",
                "muted": true,
                "avatar": "",
                "isHost": true,
                "bCoHost": false,
                "hasAsn": false,
                "bHold": false,
                "bRaiseHand": false,
                "feedback": 0,
                "userType": 9,
                "sharerOn": false,
                "sharerPause": false,
                "bLocalRecord": false,
                "isAllowTalk": false,
                "isGuest": false,
                "bCanAdmit": false,
                "bCCEditor": false,
                "bid": "",
                "caps": 5,
                "os": 7,
                "userGUID": "445D8EAE-85D5-D603-8A5C-713BD2D2F46D",
                "zoomID": "RF2OroXV1gOKXHE70tL0bQ",
                "action": 2,
                "userEmail": "XZVmTKGqE3GB_w9k8G-w1pq2cJXiF3F5Ow-GbjTxaHzocsA.cTf8lUqCPZCnXUbC@gmail.com",
                "bVideoOn": false
            },
            {
                "userRole": 0,
                "userId": 16780288,
                "participantId": 0,
                "displayName": "Delon & Jackie Newman (2)",
                "res": {},
                "audio": "computer",
                "muted": true,
                "avatar": null,
                "isHost": false,
                "bCoHost": false,
                "hasAsn": false,
                "bHold": false,
                "bRaiseHand": false,
                "feedback": 0,
                "userType": 9,
                "sharerOn": false,
                "sharerPause": false,
                "bLocalRecord": false,
                "isAllowTalk": false,
                "isGuest": true,
                "bCanAdmit": false,
                "action": 2,
                "bCCEditor": false,
                "bid": "",
                "caps": 5,
                "nUserStatus": 1,
                "os": 2,
                "userEmail": "rb2JsxnwyBmJlU6HYfWM340T5_4f-7vt8R01lvHJDZq9swRTNqI7ignLAA.WoTFX8oGs7qEAjJ3@gmail.com",
                "userGUID": "7707A4C8-9172-A5C7-C6A7-04B3BEC0C474",
                "zoomID": "dwekyJFypcfGpwSzvsDEdA",
                "bVideoOn": false
            },
            {
                "userRole": 0,
                "userId": 16780289,
                "participantId": 0,
                "displayName": "Ann Fernandez",
                "res": {},
                "audio": "computer",
                "muted": true,
                "avatar": null,
                "isHost": false,
                "bCoHost": false,
                "hasAsn": false,
                "bHold": false,
                "bRaiseHand": false,
                "feedback": 0,
                "userType": 9,
                "sharerOn": false,
                "sharerPause": false,
                "bLocalRecord": false,
                "isAllowTalk": false,
                "isGuest": true,
                "bCanAdmit": false,
                "action": 2,
                "bCCEditor": false,
                "bid": "",
                "caps": 5,
                "nUserStatus": 1,
                "os": 2,
                "userEmail": "rb2JsxnwyBmJlU6HYfWM340T5_4f-7vt8R01lvHJDZq9swRTNqI7ignLAA.WoTFX8oGs7qEAjJ3@gmail.com",
                "userGUID": "7707A4C8-9172-A5C7-C6A7-04B3BEC0C475",
                "zoomID": "dwekyJFypcfGpwSzvsDEdA",
                "bVideoOn": false
            }
        ],
        "xmppAllowTalkList": [],
        "raiseHandUniq": "",
        "holdOnUniq": "",
        "addNewUserUniq": "1;dwekyJFypcfGpwSzvsDEdA",
        "removeUserUniq": "",
        "waitingRoomUserUniq": "2",
        "failoverUsersInWaitingRoom": [],
        "failoverUsersInMeeting": []
    },
    "sharing": {
        "UI": {
            "sharerShowPermissionSetting": false,
            "popUpBox": {
                "show": false,
                "type": 2
            },
            "popOver": {
                "show": false,
                "type": 0
            },
            "sharerClientReceivedRectDimension": {
                "width": 0,
                "height": 0
            },
            "isSharingContentOriginalSize": false,
            "shareeOriginalDimension": {
                "width": 1920,
                "height": 1080,
                "logicWidth": 1920,
                "logicHeight": 1080
            },
            "isCopyButtonVisible": false,
            "isNewSharerToastVisible": false
        },
        "sharerExtensionInstalled": false,
        "sharerSsrc": 16778243,
        "sharerEnabled": true,
        "sharerStatus": 1,
        "sharerSharingCount": 0,
        "sharerPermissionCode": 1,
        "sharerEncodeSdkInitialized": true,
        "sharerIsShareOptionLocked": true,
        "shareeDecodeSdkInitialized": true,
        "shareeCurrentActiveNodeId": 0,
        "shareeCurrentSSrc": 0,
        "shareeCurrentReceivedShareQuality": 1,
        "isReceiveSharing": false,
        "isRequestingRemoteControl": false,
        "isRemoteControl": false,
        "isGrabRemoteControl": false,
        "isSDKGrabControl": false,
        "isRemoteControlEnbaled": false,
        "shareeRemoteControlUserList": [],
        "shareeRemoteControlClipboard": null
    },
    "recording": {
        "UI": {
            "reminderAlertVisible": false
        }
    },
    "dialog": {
        "isInstanceOpen": false,
        "lockConf": {
            "rememberLockChecked": false
        },
        "rename": {
            "userName": null,
            "userId": null,
            "visible": false
        },
        "reconnect": {
            "errorCode": null,
            "visible": false
        },
        "connectError": {
            "visible": false
        },
        "expelInfo": {
            "visible": false
        },
        "confEnded": {
            "visible": false,
            "isAutoLeave": false
        },
        "confFull": {
            "visible": false,
            "lmURL": null
        },
        "confLocked": {
            "visible": false
        },
        "joinVoipTimeout": {
            "visible": false
        },
        "requestControl": {
            "visible": false,
            "refused": false
        },
        "muteAll": {
            "unmuteThemselvesChecked": false
        },
        "unmuteByHost": {
            "visible": false
        },
        "shareSetting": {
            "visible": false
        },
        "cannotJoinMeeting": {
            "visible": false,
            "errorCode": null
        },
        "cannotShare": {
            "visible": false
        },
        "disallowTip": {
            "visible": false
        }
    },
    "footer": {
        "visibility": {
            "isHoverFooter": false,
            "isMouseMove": false,
            "isAlwaysShowFooter": false,
            "showLeaveMeetingOptionBox": false,
            "showAssignNewHostBox": false
        },
        "moreButton": {
            "isDropDownOpen": false
        }
    },
    "audio": {
        "UI": {
            "isAudioMenuVisible": false,
            "isMicrophoneDisallowVisible": false,
            "isJoinAudioDialogVisible": false,
            "selectedJoinTab": "voip",
            "joinVoipLoading": false,
            "isSelfHangUp": false
        },
        "simuLive": {
            "muted": true
        },
        "asnIds": {
            "asn1": 16780288,
            "asnUser": "Jackie Newman"
        },
        "dialOut": {
            "isSuccessful": false,
            "returnCode": -1,
            "sequence": 0,
            "phoneNumber": "",
            "selectedCountry": {
                "value": "United States",
                "label": "United States (+1)",
                "code": "+1"
            },
            "isRememberPhoneNumberChecked": false
        },
        "microphoneDevicesList": [
            {
                "deviceId": "",
                "label": "Unrecognized microphone0"
            },
            {
                "deviceId": "default",
                "label": "Same as System"
            }
        ],
        "speakerDevicesList": [
            {
                "deviceId": "",
                "label": "Unrecognized speaker0"
            },
            {
                "deviceId": "default",
                "label": "Same as System"
            }
        ],
        "activeMicrophone": "default",
        "activeSpeaker": "default",
        "isMicrophoneForbidden": false,
        "isHostMutedAll": false,
        "isSelfMuteOrUnmute": false,
        "audioSsrc": 16778241,
        "isSupportAttendeeCallOut": false,
        "isSupportAttendeeTollFreeCallIn": false,
        "isServerSupportAttendeeTelephony": false,
        "isAllowToTalkUnmuteInProgress": false
    },
    "video": {
        "simuLive": {
            "videoUrl": "",
            "status": "",
            "offset": "",
            "autoreplyEnabled": ""
        },
        "UI": {
            "loading": false,
            "activeVideoWidth": 1022,
            "activeVideoHeight": 574.875,
            "suspensionVideoWidth": 192,
            "suspensionVideoHeight": 108,
            "isTalkingVisible": false,
            "isVideoMenuVisible": false,
            "videoInSharingShowType": 1,
            "selfVideoShowType": 1
        },
        "isReceiveVideo": false,
        "activeNodeId": 0,
        "receivedVideoQuality": 2,
        "isSpotlight": false,
        "spotlightNodeId": 0,
        "cameraDevicesList": [
            {
                "deviceId": "",
                "label": "Unrecognized camera0"
            },
            {
                "deviceId": "default",
                "label": "Same as System"
            }
        ],
        "activeCameraDevice": "default",
        "isCameraTaken": false,
        "isCameraForbidden": false,
        "isCameraCaptureLoading": false,
        "isClientDisableReceiveVideo": false,
        "hasInformedRwgDeviceVideoCap": true
    },
    "QA": {
        "textBoxState": {
            "question_tb": {}
        },
        "expandedQidList": [],
        "activeTabKey": 0,
        "qaList": [],
        "showQAUI": false,
        "unreadQAListForAttendee": {},
        "settings": {
            "bAllowAnonymousQuestion": true,
            "bAllowAttendeeViewAllQuestion": true,
            "bAllowAttendeeUpvoteQuestion": false,
            "bAllowAttendeeCommentQuestion": false
        },
        "questionList": []
    },
    "breakoutRoom": {
        "UI": {
            "showCreateBoRoomsWindow": false,
            "showManageBoRoomsWindow": true,
            "showRequestJoinDialog": false,
            "showInviteJoinDialog": false,
            "showAskForHelpDialog": false,
            "showLeaveRoomDialog": false,
            "showNeedHelpDialog": false,
            "showTimeUpNotifyDialog": false,
            "showRoomWillCloseDialog": false,
            "showWhereUnassigendAttendeesPopoverTip": false,
            "showWhereJoinRoomPopoverTip": false,
            "isScrollingScrollbar": false,
            "showRoomHasStartedNotify": true,
            "showWaitingRoomTip": false,
            "loading": false
        },
        "options": {
            "autoJoin": false,
            "backToMainSession": true,
            "autoCloseTimer": false,
            "timerDuration": 1800,
            "timerAutoEnd": false,
            "needCountDown": true,
            "waitseconds": 60
        },
        "hugeBo": false,
        "hasCreatedRoom": true,
        "hasNotifiedHostTimeUp": false,
        "distributionPattern": 1,
        "roomNextId": 9,
        "roomList": [
            {
                "boId": "{7B4DBCB5-18A8-5207-CC82-5A97131FAD9B}",
                "name": "Lawrence FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{2E4863BA-F221-C5FC-EDB2-CF335163F690}",
                "name": "Bybee FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": [
                    "445D8EAE-85D5-D603-8A5C-713BD2D2F46D",
                    "7707A4C8-9172-A5C7-C6A7-04B3BEC0C474"
                ]
            },
            {
                "boId": "{0A4925F1-37D8-E77C-5434-4591C84D2288}",
                "name": "Enebak FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{864C64C7-D8D9-D7E4-D588-C2FEE34D03B1}",
                "name": "Jacquez FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{D9434942-8D30-60CA-FE07-BC73047DF995}",
                "name": "Razatos FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{FE4A409D-BDEE-0D3E-4664-693D588E81A3}",
                "name": "Rosene FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{BF45795F-70FC-BE78-D160-30FE03B0EEA2}",
                "name": "Vargas FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{F6494D54-BE30-FB72-ED7D-AE680D8A8094}",
                "name": "Saleeby FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            },
            {
                "boId": "{29445DBF-DF46-8646-3D75-F5D0C134C983}",
                "name": "Gabbert FSG",
                "boStatus": 5,
                "hostId": "",
                "attendeeIdList": []
            }
        ],
        "preRoomSize": -1,
        "roomSizeList": [
            {
                "boId": "{7B4DBCB5-18A8-5207-CC82-5A97131FAD9B}",
                "size": 0
            },
            {
                "boId": "{2E4863BA-F221-C5FC-EDB2-CF335163F690}",
                "size": 1
            },
            {
                "boId": "{0A4925F1-37D8-E77C-5434-4591C84D2288}",
                "size": 0
            },
            {
                "boId": "{864C64C7-D8D9-D7E4-D588-C2FEE34D03B1}",
                "size": 0
            },
            {
                "boId": "{D9434942-8D30-60CA-FE07-BC73047DF995}",
                "size": 0
            },
            {
                "boId": "{FE4A409D-BDEE-0D3E-4664-693D588E81A3}",
                "size": 0
            },
            {
                "boId": "{BF45795F-70FC-BE78-D160-30FE03B0EEA2}",
                "size": 0
            },
            {
                "boId": "{F6494D54-BE30-FB72-ED7D-AE680D8A8094}",
                "size": 0
            },
            {
                "boId": "{29445DBF-DF46-8646-3D75-F5D0C134C983}",
                "size": 0
            }
        ],
        "preAssignBoList": [
            {
                "BoName": "Lawrence FSG",
                "email": [
                    "_nljkXS6OzIH3m0B3EOww9jE9RL5KhlRcloGpqykgfxuKvNplg._3t5LjIBmAbQb0FO@gmail.com",
                    "ff1aT5nQgwi2WCZtzpNpwE7WdN7IuxGQkVg0oO_dOhVrgg.aKUMECbA1T8_YjMf@yahoo.com",
                    "bT8ApfCzyr5aIeLTlSG7M3RzeJkhO4cdwsrCurv9VnN9lvs.JQIYEdPdzkDPdJkE@gmail.com",
                    "L4XK9WVaTB7G8_rCTWRuD8G_XiRRFKotWBhyS66Paiq2OKk.fRmmdrGoafFSVtGF@gmail.com",
                    "SZLYyKixT7apJDg96pKWtpZTiJmHoliwF80SIhuSsVk0IE-T7lsc.Owz8-gTykiWUK2tS@yahoo.com",
                    "IVGruV-CbTJ4kS9vTDWL_o5PZZi6YltIh4y0WW8B-SyDCt7h.51LeEIuzjQE4jZ8q@omni-sales.com",
                    "PYmQr3lJZWdKYpVa7UZlMb4nM1_UQJrbT5jmsnb5HY19CXvAIao.bMHdTJlzE02PR88M@yahoo.com",
                    "XKjjYnycx2hQXPNYH6PpH5hRszakq93Qa-eGtpt9bVw6QAg2Aw.CbEfM4Ki3Eh029AE@yahoo.com",
                    "H_qhafcC4JF9W0sWK6RYYwznnu-9nNgsG2jGvThaY6GtUwY.GTs_ecgj8PKfaYVM@gmail.com",
                    "NCTY6d3F36eddosX0cjcbMKLTsVIZIGOZMcJvxQ4KIFJS1Cew2A.TsosxoYBE0I2SuMJ@gmail.com",
                    "_bKSBJ2k638X6zOJE_pnANt_H_mMVke26zZZvA9yCDZC7A.uUmBUzHXAVwHjonq@yahoo.com",
                    "T2-No4KLRM1gYd7qTbN-7IPHyrWXlJppe6ixT0OWXKYpjlTLLwQ.BNjVQr8F6MNpJ8Kn@gmail.com"
                ]
            },
            {
                "BoName": "Bybee FSG",
                "email": [
                    "JM0AcH48IqAhcSTRRAkUM1XMn9noUKDnPO7_DzcWUSea.Xf3JUYcS3zM-V8VE@gmail.com",
                    "DBDTInEGE1mMi0IhoLe9J_jF_hiwdJfQW_L4ldEO0gIR6R8.RodzCn_7DOWI9M7y@yahoo.com",
                    "wPQB5nuWOikYLhlRfs4Bd8D_Q5jPFJK99CNu3IxNKHDkAQ.QDnTvFbayawE9SIh@yahoo.com",
                    "dzgLKhydOgs8IuDyyPWwg6TgVU7vDHq-Gy7P_6VEJD_k.ow0yze-95UuOy1wQ@hotmail.com",
                    "cKUTiBuNSj-pYYbrO5GiuXEFw09agcG0oyafmP5SoonD6rkM_D0R5cRt.Ertm-ekq3pJKutUw@gmail.com",
                    "YnzY6C60OGS8LtB_R7rA1dqK97Q2bLUbKfBXehfmcnPPyl2dfn5uq3Um.HvIvxLpWa-8FwDsR@gmail.com",
                    "sTfyG32YbmvgssUJxGF6dClaygidrQq0W9naB936n5lQUiE.c3i582sUU_EheFS0@icloud.com",
                    "_m_aa5hbMSy5r_tfImSdxIHdPdkUWUECiTBcXxosN3o7IcLq.U1_B-imLSD6ACnom@gmail.com",
                    "8zg_mZ0qnHpqKEui7_HFI2gXPOgQL2hwLZgWTGkWkSX0OzcnVcpj0w.bDOIEdeJmNb-W7Ce@gmail.com",
                    "JPXFzj_QEBkS4AXWWB-mmtMF6Wbvg2o6s0YyUG2qo8CBx9M.gdgLVXWRXyGSVoxu@yahoo.com",
                    "R8mu1sXSSCHYLdyOFdg4kNyoH7IJ9-gwfcMzlcG7FRBZLTs.AwKSCCSN0-Zrufpp@gmail.com",
                    "bsi-prraP9IzDMpJTQBprnjT6r7_LF8NbiEgS8ce-TYP3ko.DyCFtATnef7tK95t@aol.com",
                    "3-9dGxr-3JuzbgwCXi3dBfLkApx1GcKe9ZF9wlN57NQCP-5E.4e8T4xjmlBYa8GWx@gmail.com",
                    "2lP6QqwZ_vGo3Euh0O_UNTUg473VwxtohtSeTjrCUNpnorA.nr7AIx6J6sr4wqlk@aol.com",
                    "PVM7Eah-voCsHeRLgzqpKdCyfL2f62UHru4zjPebASeYVfAYsv6vwKro9aY.aPXmefgH3zN9YTgX@hotmail.com",
                    "omvMCoNViCq7NzjB_aWF7GFrcMhv6rC0vN4mfBNDrTt_Wl6xJQ.TI9H3Z-1_V-kHT_x@gmail.com"
                ]
            },
            {
                "BoName": "Enebak FSG",
                "email": [
                    "K-nhzwpyiWuDXpfJRTLq0V3yDE4qrO8AcnjnQJakHDmevQ8.TOVlJ1SsDE-0Tcru@gmail.com",
                    "hO9ruyNN1H9ILg6sP-JDOpmYv-2Ng0Jhp4sBjbfthBeCQmQfxg.zMQp0bTGQQsTFwjb@hotmail.com",
                    "A3WW-LuANniEHXGr0Wmo3rXgi10AnvV2Br4ZOMpdP15ONBqk.L_js3l_3sKVHReQ0@icloud.com",
                    "gcNi6JTAf0FDal16tzu6y9PKNSZYo9J3VW7x8br9FeIeEbA.VwekfeMZMze_mEjS@gmail.com",
                    "Yt7uozEft6Om_e2FBv8_cHp1Nhla8_tCeFDyxCIXDnozljm4e-UYOWcn6Pk.y7da_QdsqOjUZ6Pu@rocketmail.com",
                    "BPkmmIVyvvhlOL2CzOYxKv-1Q5EcxbxeDeiuD43UNfzqjMz-BJSB.MaVfRPVOAbFObCuU@gmail.com",
                    "M79jay-JakG1RtU6gmOnDKXSZ1rUumDpYheYHHOPNDrbkRI.PBTq27SPyb7qOh8f@gmail.com",
                    "2d-xhIhkVR3Yloyd7dH9Tcz1c18r1UbUvbBQCT0AwlCOezZr.DyDUDhOIxXw6Tz-S@comcast.net",
                    "1BXhPjytevmZ2cwA-jVggK8JcdIM7vhZUMcphVRvO0pJItG5adw.EBblFKEK_UbM4O30@gmail.com",
                    "RNBypGDQxm4sLBALGMFSHqmh_4bnEkeG2gOZfM7skoUclzS6UQ.m8i7p-FYv9P8wB_U@gmail.com",
                    "Z1g_Y-ZkIpxPkY6pi0B7foi-hCSqWmNn02oEUXzNNFmbaBrlUVQ.UjV_X56aGxVZ7JKs@gmail.com",
                    "FG9FWyIvlk5eySOqUnpG-DY_Neb2mzoYrBz1nyufhXUtGHHd.1DRxjJ_Y2MGNaDfn@gmail.com",
                    "l30VjYaoX774UW8o63D5bfw7lOGqpQZ2-wDPUDc6KE4zFA.0bvHJzRU53YWIWhE@gmail.com",
                    "cb5U-ULlNRHL02ZPnfCGl4W6S-GyETGyCJbXFnSj4i4.ma5UenSF4QIFCguu@yahoo.com",
                    "QWPQzIFX8Eg9ZjH39p6MsT9kYw9N3brn2KHZhSkHC3SdUHvw4B4.4JL2Zn6gzvnR-nCQ@hotmail.com",
                    "TCc5EPHiT0kkzDgDvaYMh9FdXaHTDoK0vnREPqhSHNHHd42sKKk.oHrOFIxu8m5Qk4gU@gmail.com"
                ]
            },
            {
                "BoName": "Jacquez FSG",
                "email": [
                    "4a6SxJPkMIgbnmKc_yxBssDb7GNKZCCmI5iTBRQNtZ40exVKqGSZ.bh7sMD9IvTauUxMV@msn.com",
                    "A49QcIcG6QLZxshwSwqHdxMws7i5UpS2bteffKvMH4ZbuFj2zw.F7ZzCfAOfPptyE_R@gmail.com",
                    "CIU3TgzbAw7tWvW2FDOdxjFnfjPuvbPTOEYOOGCiGp7a.Fwet_nxA9GHaPGZc@hotmail.com",
                    "5Cvg9AN40P15TagyyEG2daafroHoylkp7tjxipym19V1kC0ygamxgS0a.DeMivlghAr39sGLE@gmail.com",
                    "tpalYh4I9No-uGVRR-emjLl_5P8YU5vx_485MIfoVtQIbaXuME-2.Z52MJXlep8VBuFE0@hotmail.com",
                    "clNxzL4X0SiSbXQqTGXr5dMGONypU6mCn0hvZFVHYHg.gbnPqWwntfkfC7Uh@gmail.com",
                    "cmOwX0EcarcDS1HabJ8n0yorfzyp8fQ_hn1zFfD1IGiG4A.18P3_c2MyrM23o2v@gmail.com",
                    "6uRTEsJMGrJHHbV4_GxYb_TYEpSORcLVvXvqSp_v9qk2eaoBI6M.886GigslKlc13cLS@yahoo.com",
                    "dkjlzUXv_1J4Kj9TSoTj8qgH94UhderIBSV6G7FtXHFeFBZA.Qb4F_zDUEtQ5_RqQ@gmail.com",
                    "7BQpugq-5dyjArWdqT3iNrlRY4_gaDyj7ITL5oNGB16RMCY5f9U.1uXYhtifoL32Qr7k@gmail.com",
                    "hVJesRLBcXvUHIJb91QCLxkCL1N0V_3Ffv2HYjqdsDRPTWJ5.XDr8KX_vObnNno0N@msn.com",
                    "5_tLfFNCTdtBr0WjChB-4EtgSZkBdDYX6_ZhrC59PmUefK8qr08.aIa0i_2TIPxq8tyG@gmail.com"
                ]
            },
            {
                "BoName": "Razatos FSG",
                "email": [
                    "W0GR4ZnBgRplnK1opjkooIELqeEgRyTO6yDjBUUqvq9VkMF59sJ8.NYLRzhXz0_j7YUqu@gmail.com",
                    "z94fGQtt8zhMizgTPrb7JwP7Fx7mSWAC44NxcN_sQeJi-_I6Xh-4.kfo2Aa6gwPZQIduH@gmail.com",
                    "xvCmzuPfhvc_SqFc7JDUsOy8TU70uDCwjUfrjv83bn9GVEgrukA._LllBuJe6ZuhYpLM@yahoo.com",
                    "OUz7FYrAneIM4hH7Tbt7AvGL9Vs-pS9-BdsoYR6h6VBa2V3q.lWtmw8AF21--v5FM@gmail.com",
                    "KEw93Cw6glo-9Wg4YOK7BXzuPpeEfWG-u5b-VMxhLLQ.A5e1ukCIFuEMB5Fh@gmail.com",
                    "OcpCAcBfiGN_yROwTEWNaT3XqjLtEGdXpj7EbO3vFnruv3V-H4E.dTFZsFGyrQrp62xq@yahoo.com",
                    "X2hvn6EluisU6TZ1VmiOr_yPtcpeKsz5HjL_-fW8uxs6i4LD.-4-6_tka9To_2NI0@hotmail.com",
                    "fD03pWQa67X6Ub-ric6ZjflQxivEXSvzVOjhuNGQf5-0vAUJ.lBef-QKCGTNxfDrA@yahoo.com",
                    "gLv6YGxlOba2v5HbABmHwzca2Q9zBT3CDbpoFrXOfYS8zBTVSd0.Q6-36GG54OO9rZ5d@gmail.com",
                    "WdneACyi5K6kYwOkjVB8mFgNxaUfk5WB3IuiHauHacbMvwIRUQ.qYm6mozoFLmXO-CS@gmail.com"
                ]
            },
            {
                "BoName": "Rosene FSG",
                "email": [
                    "D7Ox5dn7YwLKqBwvhK-ylAjQ2FVUSP0kJZif3LaorwaqkSd2.8ta7bGiy6Z5cSSPl@gmail.com",
                    "2By06xXj3w9oLvHdndPuwIVmlIo7F0Y76OuiTgKiVSyHhjB808Y6.kk-yQV1z6eubm2u2@gmail.com",
                    "prXqpbd0oEuzjaSHMVx8zcOeunuJ9YwNi1kd9Han5A20hKMWgpjGt-WHacay.BxTSapKdx3x79LNG@yahoo.com",
                    "gxWqH2TePxfdFUpijCwwMA7YXGVZJRB6BV4wmNzB1whtUjBY_tw.c7nzLH6D3-aVTs2i@gmail.com",
                    "rb2JsxnwyBmJlU6HYfWM340T5_4f-7vt8R01lvHJDZq9swRTNqI7ignLAA.WoTFX8oGs7qEAjJ3@gmail.com",
                    "0UEuV1CUacV-D9li3ur9-dI3zslqWK-KJW2-A-515aPC_MvHGlaY.OGopvam0Xh2Cix7c@icloud.com",
                    "p4xUhpA1HywVC1tYl43yTleKXSqf2PsZ8cTTwQJMaQ.2202V7wiA0UgK-QS@unm.edu"
                ]
            },
            {
                "BoName": "Vargas FSG",
                "email": [
                    "-H3TV8koyu-OYArTqiFgdi04nz-Ft3laGUrFgMew-A.zNsokXGQOrW5gIx4@msn.com",
                    "Z1BQBv0nnh7JVtCC0PRE3L5EJjCyx2P5kOGaxa9AHLtp41g.5Vv6fXF9cx6ldeWV@gmail.com",
                    "j1WrfQjq09ISItoha6m6L-TACpvEqGUFokQA2cA2hqSAqyFPDA.kglZ_qV7T-ckVHqE@gmail.com",
                    "98rGCvmKr3-_AG3AtaXu0-XwgWy7aLznEbYvUnpgs9vo0Ef_xg.6fgGJnUaaMFW8YzR@gmail.com",
                    "z4GvMfL3n-26C0JiiqckvTTNM942WcmyyfOZ4dx0gQnR._KEqKlP0TX5R8hMx@yahoo.com",
                    "8ACQeUkWjL19x0LiGmVdHlKMuyTU9z23Kfkj7dsmhYZqs48HZ3KqDguZVOs.XpZEQKwatqhmf7kB@comcast.net",
                    "7kAkjLJwG9ruv9k0mI_OQE0zQ0Ks_5nw1dRw9-J5ltKb8EgmEw.yQsN7WAMlAas5DsI@gmail.com",
                    "fK72LUK7_VYauSCQZhKZIEWYndqnxkbT12TPsVEQ9jsn.vdMAztOXcq6hLsq1@gmail.com",
                    "rGPgzqFRxIjdR-TZAYyhCtSkgZmz10pe71cbHECrIlgTQw.hpRww1YZ1XcAILnz@yahoo.com",
                    "Z4D7xkd374nYmI7IStquZiYGInRirRx3DH9I-6SvqwSTsW8M3g.0Xn_sYaGolXXutlO@yahoo.com",
                    "6xkNZrYHuE8K0jK9l9JbzGSZCv4ptK51CBmpudJbzxmA.ptgSjVtOy_IKygsr@gmail.com"
                ]
            },
            {
                "BoName": "Saleeby FSG",
                "email": [
                    "mGrExtaomptQqezpr0SSIpJWFG-Z1q_a6iCckjtEl4-bWHXC.EDePThzbNznWLr4P@gmail.com",
                    "hQeESt-_qdfCXW65cs30fGUJtHquFopf2PG6B1wwdMK1T64m.SRewtIfINh27ORRK@gmail.com",
                    "a49UX75MA5ThrHu6kMNOd3YkWn6llF7AcQaSnHppNb6Q8oRbfrSbcB2yskZ-.wVSBTVx4uKBY58vy@state.nm.us",
                    "U_TFQGNFWbArfwDZk7tHvLX5cpWzkCC9jpE-T2_GCLXT_w.oOHRqTDZ-97fHEGL@juno.com",
                    "qyguCo9o0GRSx_3tHVoZZ09A1CH38dMxUueyBkvxc4t97ZYLzrg.4eiiE1q5kR6eam1S@hotmail.com",
                    "HjvWTslDgWrrjhS_w5ovUUgO_ZOfHNYAAaEwynatr4oW8lqQ8WYxRas.JI39cE892jOM3Lxh@gmail.com",
                    "WRXVz9iLmwdeefN8Ow8hbKKqBBqjjHf7VdVYjrCRNSEM0G4.k-w2DIp_H3OlYgW2@gmail.com",
                    "9Tc7HG_YcHMOevSaWp_QSsO0WYanLoJdRhTXSm3XV0IBy914.Ryex9sNRDXWWySFD@gmail.com",
                    "siw727n9wrD9G_gnqI4Cf-xSEg4AmEPwfgmdusDlV5Gx1AzpPOPR9Q.CUJji1jTLt8fGKLL@yahoo.com",
                    "BdHkbFTkflFa_yWofZwDUzz3IgANnQVaixOlhvYON4o1_IkcjCzweQ.yk7pj1DvynUH_rhS@icloud.com",
                    "UTFH3lQrWK2JPxZuYPtvQOvy_qH1Oj5I069PuIv-NBgiZh8.P25WZAveQFVcasay@gmail.com",
                    "jivKXOdBE2mzg1VkqKvd3f07kZUo2d_10dPBXKcRJzOLFav-teD05wo.21Rk-4y8N9EFa09J@gmail.com",
                    "m599kGYlrpFXbUA-cv8XiihBpXj-ITgYVa4jB4McEtLcs8QVB5nWhbA.VVG_ZvVeFNxgxoKx@yahoo.com",
                    "uogQb2R79JoMSqckpBZkyZ_GiePAG1m0Lb1h6YnQ_f9Exx8Z5xm9LSg.26ZMIaxcTPYHaA-9@gmail.com",
                    "vSfV9icrTXXApmAgsNoEZ0T-v2EqhrWv0z_Q6TomsnYSd3u2KNt45TQnHQ.2dvXUYLbxH-Pta6f@icloud.com"
                ]
            },
            {
                "BoName": "Gabbert FSG",
                "email": [
                    "a2U3_ngpTgeGdRPG7LofC650VF3rDwOXH9UCcY9H989QwFjhs1o.StHGyEWCh3FD96HD@gmail.com",
                    "lwWvnPUi2lNTsAlzj56x-qQUcJvNdH0miighfD2_XDw-WFemxA.GOvZ4KazcffBa6Xl@hotmail.com",
                    "WS2qHGpoY0vYg6Crgzuu6m4_L5jEnjCxmReGkYfMNLnoMpW_Yg.e4hne6xyxRXevjnf@yahoo.com",
                    "2FAAohv_Ue62Lpu3rDHCsDTVH1QBzcnkjBiqR3X3e1oiCN8.mGp1T4onFTG7pWL9@gmail.com",
                    "YF0bMjPo7zdCo-sLNU-BswquuCo4HySYRvwQDRNKpZRc9Vk.BID8seFP0j5sriRj@gmail.com",
                    "MoEYlvhqRkkB5EClpNOQ-ckZLmpeC_r5UC7MoMmc9ek.DhGq0Z-ROUVLWw2R@usa.net",
                    "Miv3Fc-mLCKbvdbxi71-CPvLUg6I0eYUj45si-cXAjbFup8cpA.zGU1cBGNnxRh2gZa@gmail.com",
                    "xwctyxYVoKUZ8VyGH9a98iUZ6bPT0ZSDiWnPVm5mejiAHw.H4rndo7X85XAJAgU@msn.com",
                    "qIPMU5zojjgb9NZo37GwfVQIZ2eys1gitcEywAjcVUG5djCC.08Ippsn01-fCmqy4@aol.com",
                    "z64PTahLryLGHN979mgRSIizyFSgI5E2ONNseiR7qf90vg.WKSCWhHECv4pscL9@yahoo.com",
                    "8ehm4WOx1pSSllNNU2MaEksT7HNt32Jb09KYJ8Ai3flnaAM.UbA6FRgDCt1oldXo@yahoo.com",
                    "3vYb41pBK__Fo3w0mgDA_ZIWFQhUyUDCEvotFecJ6DxCG7ozDwio.N3fhGcI50EoJFNUK@gmail.com"
                ]
            }
        ],
        "controlStatus": 4,
        "broadcastMessage": "",
        "boFactorTime": {
            "joinBoLocalTime": null,
            "boRoomStartTimeOnMMR": 4448,
            "meetingStartTimeOnMMR": null
        },
        "mainSessionFactorTime": {
            "joinMeetingLocalTime": 1603573877.949,
            "meetingStartTimeOnMMR": 0,
            "openBoTime": 1603578326.371
        },
        "closeBoStartTime": null,
        "hasReceiveBoClosingRes": true,
        "attendee": {
            "status": "initial",
            "autoLeaveBoMeetingTimer": null,
            "joinBoCmd": "joinRequest",
            "boConfId": "",
            "room": {
                "boId": "{2E4863BA-F221-C5FC-EDB2-CF335163F690}",
                "name": "Bybee FSG",
                "boToken": "",
                "boStatus": 3
            }
        },
        "isHostBeforeJoinBo": true,
        "mainSessionAttendeeList": [],
        "hostZoomId": null,
        "isSecondWSChannelReady": false
    },
    "chat": {
        "meetingChat": [],
        "showChatType": 0,
        "receiver": "Everyone",
        "receiverId": 0,
        "unreadChat": {
            "hasUnreadChat": false,
            "unreadChatNum": 0
        },
        "showChatWindow": false,
        "webinarAttendeeReceiver": [],
        "isReceiverAbsent": false,
        "isSenderInsufficientPrivileges": false,
        "isImproperReceiver": false
    },
    "security": {
        "UI": {
            "showReportContentWindow": false,
            "showReportFeedbackDialog": false,
            "isSecurityDropdownVisible": false,
            "isRequestEnableWaitingRoom": false,
            "isRqeuestLockMeeting": false
        },
        "reportedUsers": []
    }
};

var ZOOM_STORE = {
    getState() {
        return ZOOM_STATE;
    }
};

var people = [
    { room: 'Rosene FSG', names: [ 'Jackie Newman', 'Delon Newman', 'Delon & Jackie Newman' ] },
    { room: 'Rosene FSG', names: [ 'Ann Fernandez' ] },
    { room: 'Rosene FSG', names: [ 'Clarence Rosene', 'Holly Rosene' ] },
    { room: 'Saleeby FSG', names: [ 'Daniel Jones', 'Gina Jones', 'The Jones Family' ] },
    { room: 'Saleeby FSG', names: [ 'Linda Young' ] },
    { room: 'Vargas FSG', names: [ 'Myles Newman', 'Lianna Newman', 'M&L Newman' ] },
];

var bh = new BellHop(ZOOM_STORE).buildSearchIndex(people);

describe("BellHop", () => {
    describe('#attendees', () => {
        it('should return a list of attendees', () => {
            
            expect(bh.attendees()).toEqual(ZOOM_STATE.attendeesList.attendeesList);
        });
    }); 

    describe('#findAttendees', () => {
        it('should return a list of attendees that match the query', () => {
            var attendees = bh.findAttendees('Jackie');

            expect(attendees).toBeDefined();
            expect(attendees.length).not.toBe(0);
            expect(attendees[0].displayName).toBe('Jackie Newman');
        });
    });

    describe('#findBreakoutRoomByName', () => {
        it('should return the breakout room when given a valid name otherwise it should return null', () => {
            var room0 = bh.findBreakoutRoomByName('Bybee FSG');
            var room1 = bh.findBreakoutRoomByName('Some Invalid Name');

            expect(room0).toBeDefined();
            expect(room1).not.toBeDefined();
        });
    });

    describe('#roomAssignments', () => {
        it('should return room assignments', () => {
            var assignments = bh.roomAssignments(people);

            expect(assignments).toBeDefined();
            expect(assignments.length).not.toBe(0);
        });
    });
});