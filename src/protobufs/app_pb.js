// source: app.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.app.AppState', null, global);
goog.exportSymbol('proto.app.SessionQuery', null, global);
goog.exportSymbol('proto.app.StateProof', null, global);
goog.exportSymbol('proto.app.soltype', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.app.AppState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.app.AppState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.app.AppState.displayName = 'proto.app.AppState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.app.StateProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.app.StateProof.repeatedFields_, null);
};
goog.inherits(proto.app.StateProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.app.StateProof.displayName = 'proto.app.StateProof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.app.SessionQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.app.SessionQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.app.SessionQuery.displayName = 'proto.app.SessionQuery';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.app.AppState.prototype.toObject = function(opt_includeInstance) {
  return proto.app.AppState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.app.AppState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppState.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seqNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    state: msg.getState_asB64(),
    timeout: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.app.AppState}
 */
proto.app.AppState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.app.AppState;
  return proto.app.AppState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.app.AppState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.app.AppState}
 */
proto.app.AppState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNum(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.app.AppState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.app.AppState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.app.AppState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSeqNum();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.app.AppState.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.app.AppState} returns this
 */
proto.app.AppState.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 seq_num = 2;
 * @return {number}
 */
proto.app.AppState.prototype.getSeqNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.app.AppState} returns this
 */
proto.app.AppState.prototype.setSeqNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes state = 3;
 * @return {!(string|Uint8Array)}
 */
proto.app.AppState.prototype.getState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes state = 3;
 * This is a type-conversion wrapper around `getState()`
 * @return {string}
 */
proto.app.AppState.prototype.getState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getState()));
};


/**
 * optional bytes state = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getState()`
 * @return {!Uint8Array}
 */
proto.app.AppState.prototype.getState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.app.AppState} returns this
 */
proto.app.AppState.prototype.setState = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 timeout = 4;
 * @return {number}
 */
proto.app.AppState.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.app.AppState} returns this
 */
proto.app.AppState.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.app.StateProof.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.app.StateProof.prototype.toObject = function(opt_includeInstance) {
  return proto.app.StateProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.app.StateProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.StateProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    appState: msg.getAppState_asB64(),
    sigsList: msg.getSigsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.app.StateProof}
 */
proto.app.StateProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.app.StateProof;
  return proto.app.StateProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.app.StateProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.app.StateProof}
 */
proto.app.StateProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAppState(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.app.StateProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.app.StateProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.app.StateProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.StateProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSigsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes app_state = 1;
 * @return {!(string|Uint8Array)}
 */
proto.app.StateProof.prototype.getAppState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes app_state = 1;
 * This is a type-conversion wrapper around `getAppState()`
 * @return {string}
 */
proto.app.StateProof.prototype.getAppState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAppState()));
};


/**
 * optional bytes app_state = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAppState()`
 * @return {!Uint8Array}
 */
proto.app.StateProof.prototype.getAppState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAppState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.app.StateProof} returns this
 */
proto.app.StateProof.prototype.setAppState = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes sigs = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.app.StateProof.prototype.getSigsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes sigs = 2;
 * This is a type-conversion wrapper around `getSigsList()`
 * @return {!Array<string>}
 */
proto.app.StateProof.prototype.getSigsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSigsList()));
};


/**
 * repeated bytes sigs = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSigsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.app.StateProof.prototype.getSigsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSigsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.app.StateProof} returns this
 */
proto.app.StateProof.prototype.setSigsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.app.StateProof} returns this
 */
proto.app.StateProof.prototype.addSigs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.app.StateProof} returns this
 */
proto.app.StateProof.prototype.clearSigsList = function() {
  return this.setSigsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.app.SessionQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.app.SessionQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.app.SessionQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.SessionQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: msg.getSession_asB64(),
    query: msg.getQuery_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.app.SessionQuery}
 */
proto.app.SessionQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.app.SessionQuery;
  return proto.app.SessionQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.app.SessionQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.app.SessionQuery}
 */
proto.app.SessionQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSession(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.app.SessionQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.app.SessionQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.app.SessionQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.SessionQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getQuery_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes session = 1;
 * @return {!(string|Uint8Array)}
 */
proto.app.SessionQuery.prototype.getSession = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes session = 1;
 * This is a type-conversion wrapper around `getSession()`
 * @return {string}
 */
proto.app.SessionQuery.prototype.getSession_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSession()));
};


/**
 * optional bytes session = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSession()`
 * @return {!Uint8Array}
 */
proto.app.SessionQuery.prototype.getSession_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSession()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.app.SessionQuery} returns this
 */
proto.app.SessionQuery.prototype.setSession = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes query = 2;
 * @return {!(string|Uint8Array)}
 */
proto.app.SessionQuery.prototype.getQuery = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes query = 2;
 * This is a type-conversion wrapper around `getQuery()`
 * @return {string}
 */
proto.app.SessionQuery.prototype.getQuery_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getQuery()));
};


/**
 * optional bytes query = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getQuery()`
 * @return {!Uint8Array}
 */
proto.app.SessionQuery.prototype.getQuery_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getQuery()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.app.SessionQuery} returns this
 */
proto.app.SessionQuery.prototype.setQuery = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `soltype`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.app.soltype = new jspb.ExtensionFieldInfo(
    1003,
    {soltype: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[1003] = new jspb.ExtensionFieldBinaryInfo(
    proto.app.soltype,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[1003] = proto.app.soltype;

goog.object.extend(exports, proto.app);
