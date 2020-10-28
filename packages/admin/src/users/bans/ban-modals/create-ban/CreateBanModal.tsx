import React from 'react';
import {toast} from 'react-toastify';
import {BanEditor} from '../../ban-editor';
import {banService} from '@instinct-prj/frontend';
import {UserBanDTO} from '@instinct-prj/interface';

export function CreateBanModal() {
  async function onSave(banDTO: UserBanDTO) {
    await banService.create(banDTO);
    toast.success(`User ${banDTO.userID} has been banned`);
  }

  return (
    <BanEditor onSave={onSave}>
      <button className="btn btn-dark">
        <i className="fa fa-plus-circle mr-2" />
        New
      </button>
    </BanEditor>
  );
}
