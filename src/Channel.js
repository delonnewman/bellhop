class Channel {
  constructor() {
      this._buffer = atom([]);
  }

  send(value) {
      var buffer = [...this._buffer.deref()];
      buffer.push(value);
      this._buffer.reset(buffer);
      return this;
  }

  receive(fn) {
      this._buffer.addWatch('receiver', (_key, _ref, _old, buffer) => {
          if (buffer.length !== 0) {
              var values = [...buffer], i;
              for (i = 0; i < values.length; i++) {
                  fn.call(null, values[i]);
              }
          }            
      });

      return this;
  }

  flatten() {
      var ch_ = new Channel();
  
      this.receive(function(values) {
          var i;
          for (i = 0; i < values.length; i++) {
              ch_.send(values[i]);
          }
      });
  
      return ch_;
  }
  
  map(fn) {
      var ch_ = new Channel();
  
      this.receive(function(value) {
          ch_.send(fn.call(null, value));
      });
  
      return ch_;
  }
  
  filter(fn) {
      var ch_ = new Channel();
  
      this.receive(function(value) {
          if (fn.call(null, value)) {
              ch_.send(value);
          }
      });
  
      return ch_;
  }

  remove(fn) {
    var ch_ = new Channel();

    this.receive(function(value) {
        if (!fn.call(null, value)) {
            ch_.send(value);
        }
    });

    return ch_;
}
}