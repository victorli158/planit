# In routing.py
from channels.routing import route
from realtime.consumers import ws_message

channel_routing = [
    route("websocket.receive", ws_message),
]