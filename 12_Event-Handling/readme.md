# (12)Event Handling

## 1. Pengertian event handling
Handling event merupakan suatu metode untuk menangani sebuah event / aksi yang diberikan pengguna kepada suatu komponen. Event merupakan suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol.

## 2. Penulisan Event
HTML :
<button onClick="activateLasers()">
Activate Lasers
</button>
React :
<button onClick={this.activeLaser}>
Active Lasers
</button>

## 3. Beberapa contoh list event
1. Clipboard Events (Promise terpenuhi)
2. Form Events (onChange, onSubmit)
3. Mouse Events (onClick, onDoubleClick, onMouseOver)
4. Generic Events (onError, onLoad)