<?php

Broadcast::channel('cart-updated.{user_id}',function ($user, $user_id){
    return (int) $user->id === $user_id;
});
