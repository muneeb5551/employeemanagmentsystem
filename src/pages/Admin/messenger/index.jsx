import React from 'react';
import AdminLayout from '@/layouts/admin/AdminLayout';
import ChatScreen from '@/components/admin/messenger/ChatScreen';

const Messenger = () => {
  return (
    <>
      <AdminLayout title="Messenger">
        <children>
          <div className="w-[95%] mx-auto mt-7">
           <ChatScreen />
          </div>
        </children>
      </AdminLayout>
    </>
  );
}

export default Messenger;
