//
//  swiperModule.swift
//  swiperModule
//
//  Copyright © 2022 Bedirhan GUL. All rights reserved.
//

import Foundation

@objc(swiperModule)
class swiperModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
